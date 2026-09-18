#!/bin/bash

# Build script for creating hostable build files
# This script copies the dist files and config files to build-files/global-build-N
# where N is the next available build number

echo "Creating hostable build files..."

# Find the next available build number
build_num=1
while [ -d "build-files/global-build-$build_num" ]; do
    build_num=$((build_num + 1))
done

build_dir="build-files/global-build-$build_num"

# Create the build directory
mkdir -p "$build_dir"

# Copy dist files
echo "Copying dist files..."
cp -r dist/. "$build_dir"

# Copy config files
echo "Copying config files..."
cp -r config-files/. "$build_dir"

# List the files
echo "Build files created successfully in $build_dir/"