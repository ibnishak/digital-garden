#!/usr/bin/env zsh

source ./.env
# Sync files from source folder to target.
# This is done so that `.md` files can be converted to `.mdx`
## Implementation of things like admonitions will be easier in mdx
echo "Syncing"
rsync -av ${SRC}/ content 

echo "Converting to MDX"
# Convert all `.md` files to `.mdx`
for f in content/*.md; do 
    mv -- "$f" "${f%.md}.mdx"
done

# build
echo "Starting build"
gatsby build --prefix-paths

