import { serveDir } from "@std/http/file-server";

const DOCS_ROOT = "./dist/steno";
const SITE_ROOT = "./dist/sveltekit";

function rewriteDocsHtml(html: string): string {
  return html.replace(
    /(\b(?:href|src|action|poster)=)(["']?)\/(?!\/|docs\/)/g,
    "$1$2/docs/",
  );
}

export async function handler(req: Request): Promise<Response> {
  const { pathname } = new URL(req.url);

  // "Back to site" in the docs
  if (pathname === "/docs/return" || pathname === "/docs/return/") {
    return Response.redirect(new URL("/", req.url), 302);
  }

  // Steno site under /docs
  if (pathname === "/docs" || pathname.startsWith("/docs/")) {
    const res = await serveDir(req, {
      fsRoot: DOCS_ROOT,
      urlRoot: "docs",
      showDirListing: false,
      quiet: true,
    });

    // Rewrite urls so that it can access css, return to correct urls...
    if (
      res.status === 200 &&
      res.headers.get("content-type")?.includes("text/html")
    ) {
      const headers = new Headers(res.headers);
      headers.delete("content-length");
      headers.delete("etag");
      return new Response(rewriteDocsHtml(await res.text()), {
        status: res.status,
        headers,
      });
    }

    return res;
  }

  // SvelteKit site
  return serveDir(req, {
    fsRoot: SITE_ROOT,
    showDirListing: false,
    quiet: true,
  });
}

if (import.meta.main) {
  Deno.serve(handler);
}
