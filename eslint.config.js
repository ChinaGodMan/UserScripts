import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import regexp from 'eslint-plugin-regexp';
import stylisticJS from '@stylistic/eslint-plugin-js';
import yml from 'eslint-plugin-yml';

export default [
    {
        files: ['**/*.js', '**/*.mjs'],
        ignores: ['.history/*'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            globals: {
                ...globals.browser,
                ...globals.greasemonkey,
                ...globals.node,
                chatgpt: 'readonly',
                chrome: 'readonly',
                config: 'writable',
                CryptoJS: 'readonly',
                dom: 'readonly',
                GM_cookie: 'readonly',
                hljs: 'readonly',
                icons: 'writable',
                ipv4: 'readonly',
                marked: 'readonly',
                modals: 'writable',
                renderMathInElement: 'readonly',
                settings: 'writable',
                toggles: 'writable'
            }
        },
        plugins: {
            import: importPlugin,
            'js-styles': stylisticJS,
            regexp
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            ...regexp.configs['flat/recommended'].rules,
            indent: 'off',
            'no-unexpected-multiline': 'off',
            'key-spacing': 'off', // allow whitespace anywhere
            'js-styles/no-trailing-spaces': 'off', // except at ends of lines
            'js-styles/max-len': [
                'error',
                {
                    code: 180,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true
                }
            ],
            'regexp/no-unused-capturing-group': 'off',
            'regexp/no-empty-group': 'off',
            'regexp/no-super-linear-backtracking': 'off',
            'regexp/no-empty-capturing-group': 'off',
            'regexp/no-useless-flag': 'off',
            'js-styles/no-extra-semi': 'error', // disallow unnecessary semicolons
            quotes: ['error', 'single', { allowTemplateLiterals: true }], // enforce single quotes
            'comma-dangle': ['error', 'never'], // no trailing commas
            'no-async-promise-executor': 'off',
            'no-constant-condition': 'off',
            'no-empty': 'off',
            'no-inner-declarations': 'off',
            'no-useless-escape': 'off',
            'no-unused-vars': 'off', // allow unused vars
            'no-undef': 'off', // disable undefined vars check
            'no-irregular-whitespace': 'error',
            'no-misleading-character-class': 'off',
            'no-redeclare': 'off'
        }
    },
    {
        files: ['**/*.mjs'],
        languageOptions: { sourceType: 'module' }
    },
    {
        files: ['**/*.json'],
        ignores: ['**/package-lock.json', '.history/*'],
        languageOptions: { ...json.languageOptions },
        rules: { ...json.configs.recommended.rules }
    },
    {
        files: ['**/*.md'],
        ignores: ['.history/*'],
        languageOptions: { ...markdown.languageOptions },
        plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off',
            'markdown/fenced-code-language': 'off',
            'markdown/no-missing-label-refs': 'off',
            'markdown/no-empty-links': 'off'
        }
    },
    {
        files: ['**/*.yaml', '**/*.yml'],
        ignores: ['.history/*'],
        languageOptions: { ...yml.languageOptions },
        rules: { ...yml.configs['flat/standard'][1].rules }
    }
];
