#!/usr/bin/env zsh

#Git update
git add public/* 
git commit -m "$(date)"
git subtree push --prefix public origin gh-pages