Microsite Template
==================

A starter repo for building microsites.


Getting started
---------------

Make a shallow copy of this repo, name it whatever you want:

    git clone --depth 1 https://github.com/chadoh/microsite-template.git my-cool-site

Change into the directory and remove the `.git` folder:

    cd my-cool-site && rm -rf .git

Update `package.json` with correct info. "author" and "repository" and all of
that is initially blank.

Initialize it as your own git repository.

    git init
    git add .
    git commit -m "Initial commit: copy from chadoh/microsite-template"

Install all development dependencies:

    npm i -D \@types/jest html-inline husky jest parcel-bundler posthtml-include sass ts-jest typescript

Run local development environment:

    npm run dev

Happy hacking!


Build & Deploy
--------------

The production version of this site lives in `docs/index.html`. This file is
**generated automatically** when you run `npm run build`, and should not be
edited. Only edit the files in `src`.

If you go to your Repo settings in GitHub, you can set up repo as a GitHub
Pages repo, using files from `master` branch and the `docs` folder.
