# syntax=docker/dockerfile:1

# Deno version
ARG DENO_VERSION=2.9.8

# Build
FROM denoland/deno:${DENO_VERSION} AS build
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends nodejs npm \
  && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY deno.json deno.lock ./
COPY site/package.json ./site/
RUN deno install --frozen

COPY main.ts ./
COPY docs ./docs
COPY site ./site
# Steno's staging dirs are 700
RUN deno task build && chmod -R a+rX dist


# Runtime
FROM denoland/deno:${DENO_VERSION}
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY deno.json deno.lock main.ts ./
COPY site/package.json ./site/

USER deno
RUN deno cache --frozen --node-modules-dir=none main.ts

EXPOSE 8000

CMD ["run", "--frozen", "--node-modules-dir=none", "--allow-read", "--allow-net", "main.ts"]
