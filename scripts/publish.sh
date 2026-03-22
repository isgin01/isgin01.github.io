#!/usr/bin/sh

# This script helps me to update my website!

# Exit on errors
set -e

# Zola doesn't seem to support checks with a provided path
cd ~/projects/blog/

zola check

lazygit
