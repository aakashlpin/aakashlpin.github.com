#!/bin/sh
while inotifywait -e modify -e create -e delete _site; do
    git add .
    git commit -m "live blogging jsfoo"
done