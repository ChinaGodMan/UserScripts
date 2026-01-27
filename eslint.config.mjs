import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import regexp from 'eslint-plugin-regexp'
import stylisticJS from '@stylistic/eslint-plugin'
import userscripts from 'eslint-plugin-userscripts'

export default [
    {
        files: ['**/*.js', '**/*.mjs'],
        ignores: [
            '.history/*',
            '.ChinaGodMan/*.js',
            'assets/**/*.js'
        ],
        languageOptions: {
            ecmaVersion: 'latest', sourceType: 'script',
            globals: {
                ...globals.browser, ...globals.greasemonkey, ...globals.node, chatgpt: 'readonly', chrome: 'readonly',
                config: 'writable', CryptoJS: 'readonly', dom: 'readonly', GM_cookie: 'readonly', hljs: 'readonly',
                icons: 'writable', ipv4: 'readonly', marked: 'readonly', modals: 'writable',
                renderMathInElement: 'readonly', settings: 'writable', toggles: 'writable'
            }
        },
        plugins: { 'import': importPlugin, 'js-styles': stylisticJS, regexp },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            ...regexp.configs['flat/recommended'].rules,
            'indent': 'off', 'no-unexpected-multiline': 'off', 'key-spacing': 'off', // allow whitespace anywhere
            'js-styles/no-trailing-spaces': 'off', // ...except at ends of lines
            'js-styles/max-len': ['error', {
                'code': 180, // limit lines to 120 chars except if containing...
                'ignoreComments': true, 'ignoreStrings': true, // ...trailing/own-line comments, quoted strings...
                'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true
            }], // ...or template/regex literals
            'regexp/no-unused-capturing-group': 'off',
            'regexp/no-empty-group': 'off',
            'regexp/no-super-linear-backtracking': 'off',
            'regexp/no-empty-capturing-group': 'off',
            'regexp/no-useless-flag': 'off',
            'js-styles/no-extra-semi': 'error', // disallow unnecessary semicolons
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // enforce single quotes except backticks to avoid escaping quotes
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            //  'no-unused-vars': ['error', { 'caughtErrors': 'none' }], // allow unused named args in catch blocks
            'no-unused-vars': 'off', // 禁用未使用变量的检查
            'no-undef': 'off', //禁用未定义变量的检查
            'no-irregular-whitespace': 'error',// 启用不规则空白字符规则
            'no-misleading-character-class': 'off',
            'no-redeclare': 'off'
        }
    },
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' } },
    { files: ['**/*.json'], ignores: ['**/package-lock.json', '.history/*'], language: 'json/json', ...json.configs.recommended },
    {
        files: ['**/*.md'], ignores: ['.history/*'], language: 'markdown/commonmark', plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off', // allow headings to skip levels
            'markdown/fenced-code-language': 'off', // allow code blocks w/ no language specified
            'markdown/no-missing-label-refs': 'off', // allow missing label references
            'markdown/no-empty-links': 'off', // allow empty links
            'markdown/no-multiple-h1': 'off', // 允许多个H1标题
            'markdown/require-alt-text': 'off', // 允许img标签不带alt
            'markdown/no-missing-link-fragments': 'off' // 关闭片段链接检查
        }
    },
    {
        files: ['**/*.user.js'],
        plugins: { userscripts: { rules: userscripts.rules } },
        rules: {
            ...userscripts.configs.recommended.rules,
            'userscripts/no-invalid-headers': 'off'
        },
        settings: { userscriptVersions: { violentmonkey: '*' } }
    }
]
