# Contributing

Hey, thanks for taking interest in this website ! Here are the instructions to dev and run locally.

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
It will build the docs and the site. Then, verify that it outputed everything in `./dist`.

4. Still in the root, run:
```
deno task run
```

The site should be running locally !

### From Docker

The Docker image is not ready yet, soon™
