#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to remove TypeScript syntax from a file
function removeTypeScriptSyntax(content) {
    // Remove type imports
    content = content.replace(/import\s+type\s+\{[^}]*\}\s+from\s+[^;]+;/g, '');
    content = content.replace(/import\s+\{([^}]*),\s*type\s+[A-Za-z0-9_<>[\]|,\s]+\}\s+from/g, 'import {$1} from');
    content = content.replace(/import\s+\{type\s+[A-Za-z0-9_<>[\]|,\s]+,([^}]*)\}\s+from/g, 'import {$1} from');
    content = content.replace(/,\s*type\s+[A-Za-z0-9_<>[\]|]+/g, '');

    // Remove interface declarations (multiline)
    content = content.replace(/^interface\s+[A-Za-z0-9_]+\s*\{[\s\S]*?\n\}/gm, '');
    content = content.replace(/^export\s+interface\s+[A-Za-z0-9_]+[\s\S]*?\n\}/gm, '');

    // Remove type declarations
    content = content.replace(/^type\s+[A-Za-z0-9_]+\s*=[\s\S]*?;/gm, '');
    content = content.replace(/^export\s+type\s+[A-Za-z0-9_]+\s*=[\s\S]*?;/gm, '');

    // Remove type annotations from function parameters
    content = content.replace(/\(\s*\{\s*([^}]+)\s*\}\s*:\s*\{[^}]+\}\s*\)/g, '({ $1 })');
    content = content.replace(/\(\s*([a-zA-Z0-9_]+)\s*:\s*[A-Za-z0-9_<>[\]|.\s]+\)/g, '($1)');

    // Remove React generic types from forwardRef
    content = content.replace(/forwardRef<[^>]+,\s*[^>]+>/g, 'forwardRef');

    // Remove type annotations from arrow functions
    content = content.replace(/\)\s*:\s*[A-Za-z0-9_<>[\]|.\s]+\s*=>/g, ') =>');
    content = content.replace(/\)\s*:\s*[A-Za-z0-9_<>[\]|.\s]+\s*\{/g, ') {');

    // Remove as type assertions
    content = content.replace(/\s+as\s+[A-Za-z0-9_<>[\]|]+/g, '');

    // Remove satisfies
    content = content.replace(/\s+satisfies\s+[A-Za-z0-9_<>[\]|]+/g, '');

    // Remove non-null assertions
    content = content.replace(/([a-zA-Z0-9_)\]]+)!/g, '$1');

    // Fix broken imports (like "class-variance-authority" without cva)
    content = content.replace(/import\s+\{\s*"class-variance-authority";/g, 'import { cva } from "class-variance-authority";');
    content = content.replace(/import\s+\{\s*\}\s+from\s+"class-variance-authority";/g, 'import { cva } from "class-variance-authority";');

    // Remove VariantProps type
    content = content.replace(/,\s*VariantProps<typeof\s+[A-Za-z0-9_]+>/g, '');
    content = content.replace(/extends\s+VariantProps<typeof\s+[A-Za-z0-9_]+>/g, '');

    // Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

    return content;
}

// Function to recursively process files
function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            let content = fs.readFileSync(filePath, 'utf8');
            const newContent = removeTypeScriptSyntax(content);

            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Fixed: ${filePath}`);
            }
        }
    });
}

// Start processing from src directory
const srcDir = path.join(__dirname, 'src');
console.log('Removing TypeScript syntax from all files...');
processDirectory(srcDir);
console.log('Done!');
