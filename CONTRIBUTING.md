# Contributing

Hey, thanks for taking interest in this website ! Here are the instructions to
dev and run locally.

## Running locally

### From deno

To run this, you will need [Deno](https://deno.com/).

1. Clone the repository:

```
git clone https://github.com/skueee/orfest.git
```

2. Go into the directory and install the dependencies with:

```
deno install
```

3. In the root of the project, run:

```
deno task build
```

It will build the docs and the site. Then, verify that it outputed everything in
`./dist`.

4. Still in the root, run:

```
deno task run
```

The site should be running locally !

### From Docker

1. Clone the repository
```
git clone https://github.com/skueee/orfest.git
```
2. Build the Dockerfile
```
docker build -t orfest .
```
3. Run it!
```
docker run -p 8000:8000 orfest
```

## Codebase

### Project structure
```
/
  .github/workflows     Github actions
  docs/content/         Steno app, for all the docs at /docs
    public/custom.css   Theming for Steno
  site/                 Sveltekit 5 app, for the website at /
  main.ts               "handler", routes /docs to Steno and everything else to Sveltekit
```

### How it works

This is a Deno app running Sveltekit 5 and [Steno](https://steno.gxbs.dev/).

To handle both Sveltekit and Steno, it has a "handler" (/main.ts) that routes everything in the right place.

Here is a "map" of where everything is routed, * means that everything (except what is already defined) is routed there:
```
domain/
  docs/return   ---> Redirects to /
  docs/*        ---> Serves Steno
  /*            ---> Serves Sveltekit
```

## Developing

### Submitting a PR

A PR should always be editable by maintainers and follow the AI guidelines.

Before submitting a PR, please test these things:

**1. Test in dev**

If you edited anything in the docs, please execute this:
```
deno task dev:docs
```

If you edited anything in the site, please execute this:
```
deno task dev:site
```

Then, test in your web browser the changes you made

**2. Build and test the app**

First, build the app with
```
deno task build
```

Then, run it with
```
deno task run
```

Then, test in your web browser the changes you made


You can also test the Docker image.

Build it:
```
docker build -t orfest .
```

Run it:
```
docker run -p 8000:8000 orfest
```

And test in your web browser!

**3. Lint and format**

Execute this to lint, then fix all errors reported that are related to what you changed (if you cant fix it, tell it in your PR and we'll see what can be changed):
```
deno lint
```

Execute this to format:
```
deno fmt
```

### Useful commands

```
deno task fmt          Formats the codebase
deno task lint         Lints the codebase
deno task dev:site     Launch the site in dev
deno task dev:docs     Launch the docs in dev
deno task build        Builds both the site and the docs
deno task build:site   Builds only the site
deno task build:docs   Builds only the docs
deno task run          Runs the built site
```

## AI Usage

AI was used to help in the development of this website, and is authorized if it follows these guidelines:

1. A human asked for this contribution. This means that you should not run your AI just to find issues. Exception can be done for security issues.
2. A human reviewed every change and can explain it.
3. A human wrote the PR/Issue description and didn't ask an AI to commit, PR or create the issue for them. An AI should not be co-author of your pr.
4. Any LLM use is correctly mentioned. A simple "AI was used for this contribution" is ok, but it's nice to have more.

If any of these rules gets violated, the issue/pr will get closed.
