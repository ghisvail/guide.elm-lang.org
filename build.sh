#!/bin/bash

set -e


## BUILD REPL

(cd repl ; npm link ; bash build.sh)

## BUILD PLUGIN FRENCH TYPOGRAPHY

(cd honkit-plugin-french-typography ; npm link ; bash build.sh)

## BUILD BOOK

npm install
npm link gitbook-plugin-elm-repl
npm link honkit-plugin-french-typography
npm run build


## OVERRIDE FAVICON

cp favicon.ico _book/gitbook/images/favicon.ico
