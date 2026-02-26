#!/bin/bash

# Script to remove TypeScript-specific syntax from JavaScript files
# This removes type annotations, interfaces, and type imports

echo "Removing TypeScript syntax from JavaScript files..."

# Use sed to remove common TypeScript patterns
find src -name "*.jsx" -o -name "*.js" | while read file; do
    # Create a backup
    cp "$file" "$file.bak"
    
    # Remove type imports (import type { ... } from ...)
    sed -i 's/import type {[^}]*} from [^;]*;//g' "$file"
    sed -i 's/import {[^}]*type [^}]*} from/import {/g' "$file"
    sed -i 's/, type [A-Za-z0-9_]*//g' "$file"
    sed -i 's/type [A-Za-z0-9_]*, //g' "$file"
    
    # Remove interface declarations
    sed -i '/^interface [A-Za-z0-9_]* {/,/^}/d' "$file"
    sed -i '/^export interface [A-Za-z0-9_]* {/,/^}/d' "$file"
    
    # Remove type declarations
    sed -i '/^type [A-Za-z0-9_]* =/,/;$/d' "$file"
    sed -i '/^export type [A-Za-z0-9_]* =/,/;$/d' "$file"
    
    # Remove function parameter types (basic patterns)
    sed -i 's/([a-zA-Z0-9_]*: [^)]*)/(/g' "$file"
    
    # Remove return type annotations
    sed -i 's/): [A-Za-z0-9_<>[\]|]* =>/): /g' "$file"
    sed -i 's/): [A-Za-z0-9_<>[\]|]* {/): {/g' "$file"
    
    # Remove as type assertions
    sed -i 's/ as [A-Za-z0-9_<>[\]|]*//g' "$file"
    
    # Remove non-null assertions
    sed -i 's/!\././' "$file"
    sed -i 's/!)/)/' "$file"
    
    # Remove satisfies
    sed -i 's/ satisfies [A-Za-z0-9_<>[\]|]*//g' "$file"
    
    echo "Processed: $file"
done

# Clean up backup files
find src -name "*.bak" -delete

echo "TypeScript syntax removal complete!"
