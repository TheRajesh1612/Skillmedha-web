#!/bin/bash

# Script to convert TypeScript files to JavaScript
# This will rename .ts to .js and .tsx to .jsx

echo "Converting TypeScript files to JavaScript..."

# Find all .tsx files and rename to .jsx
find src -name "*.tsx" -type f | while read file; do
    newfile="${file%.tsx}.jsx"
    mv "$file" "$newfile"
    echo "Renamed: $file -> $newfile"
done

# Find all .ts files (excluding .d.ts) and rename to .js
find src -name "*.ts" -type f ! -name "*.d.ts" | while read file; do
    newfile="${file%.ts}.js"
    mv "$file" "$newfile"
    echo "Renamed: $file -> $newfile"
done

echo "File renaming complete!"
