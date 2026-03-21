#!/usr/bin/sh

# This script helps me to update my website!

set -e

cd ~/projects/blog/

zola check

# Archive my entire website so that it could be downloaded

git archive --format=zip --output=static/isgin01-website.zip HEAD

git bundle create static/isgin01-website-clone-with-git.bundle --all

lazygit
