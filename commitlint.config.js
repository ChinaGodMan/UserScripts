const { defineConfig } = require('cz-git')

module.exports = defineConfig({
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: '选择你要提交的变更类型：',
            scope: '标明此变更的范围（可选）：',
            customScope: '标明此变更的范围：',
            subject: '写一个简短的、命令式的变更描述：\n',
            body: '提供一个更长的变更描述（可选）。使用 "|" 来分隔换行：\n',
            breaking: '列出任何破坏性变更（可选）。使用 "|" 来分隔换行：\n',
            footerPrefixesSelect: '选择此变更所关联的ISSUES类型（可选）：',
            customFooterPrefix: '输入ISSUES前缀：',
            footer: '列出此变更相关的ISSUES。例如：#31, #34：\n',
            generatingByAI: '正在生成你的AI提交标题...',
            generatedSelectByAI: '选择AI生成的合适标题：',
            confirmCommit: '你确定要提交上述变更吗？'
        },
        types: [
            { value: 'feat', name: 'feat:     ✨  新功能', emoji: '✨' },
            { value: 'fix', name: 'fix:      🐛  修复 bug', emoji: '🐛' },
            { value: 'docs', name: 'docs:     📝  仅修改文档', emoji: '📝' },
            { value: 'style', name: 'style:    💄  不影响代码意义的变动', emoji: '💄' },
            { value: 'refactor', name: 'refactor: ♻️   代码重构，既不修复bug也不新增功能', emoji: '♻️' },
            { value: 'perf', name: 'perf:     ⚡️  提升性能的代码变动', emoji: '⚡️' },
            { value: 'test', name: 'test:     ✅  添加或修正测试', emoji: ':✅' },
            { value: 'build', name: 'build:    📦️   影响构建系统或外部依赖的变动', emoji: '📦️' },
            { value: 'ci', name: 'ci:       🎡  修改CI配置文件和脚本', emoji: '🎡' },
            { value: 'chore', name: 'chore:    🔨  其他不修改源代码或测试文件的变动', emoji: '🔨' },
            { value: 'revert', name: 'revert:   ⏪️  回滚之前的提交', emoji: '⏪️' }
        ]
        ,
        useEmoji: false,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: '自定义',
        emptyScopesAlias: '无',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: '跳过',
        customIssuePrefixAlias: '自定义',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
})
