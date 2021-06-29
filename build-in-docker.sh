#!/bin/sh

if [ -z "$1" ]; then
  docker run -it --rm \
    --workdir /app \
    --volume `pwd`:/app \
    --publish 4000:4000 \
    --publish 4001:4001 \
    tianon/github-pages:202 \
    /app/build-in-docker.sh build
else
  bundle install --jobs=4
  bundle exec jekyll serve \
    -H 0.0.0.0 \
    --trace \
    --watch \
    --force_polling \
    --livereload \
    --livereload-port 4001
fi
