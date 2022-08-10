#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy 404.html for hack SPA on the gh pages
cp 404.html dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:d27o/availability-analysis.git main:gh-pages

cd -
