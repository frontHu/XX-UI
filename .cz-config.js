module.exports = {
  types: [
    {
      value: ':sparkles:',
      name: '✨ 增加新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛 修复bug'
    },
    {
      value: ':pencil: docs',
      name: '📝 修改文档(仅文档更改)'
    },
    {
      value: ':lipstick: ui',
      name: '💄 更新UI(更新用户界面和样式文件 )'
    },
    {
      value: ':art: style',
      name: '🎨 改进代码的结构（空白、格式、缺少分号等）'
    },
    {
      value: ':recycle: refactor',
      name: '♻️  重构代码'
    },
    {
      value: ':bookmark: release',
      name: '🔖 发布版本'
    },
    {
      value: ':rocket: deploy',
      name: '🚀 部署'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ 增删测试'
    },
    {
      value: ':wrench: chore',
      name: '🔧 更改配置(构建过程或辅助工具的变动，包配置文件)'
    },
    {
      value: ':tada: init',
      name: '🎉 初次提交'
    },
    {
      value: ':heavy_plus_sign: dep_add',
      name: '➕ 添加依赖'
    },
    {
      value: ':heavy_minus_sign: dep_rm',
      name: '➖ 删除依赖'
    },
    {
      value: ':whale: docker',
      name: '🐳 Docker'
    }
  ],

  scopes: [
    { name: 'common' },
    { name: 'build' },
    { name: 'core' },
    { name: 'upgrade' }
  ],
  scopeOverrides: {
    ':wrench: docs': [{ name: ':wrench: docs' }, { name: ':bulb: docs_code' }]
  },
  messages: {
    type: '选择更改类型:',
    scope: '\n更改的范围:',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix']
}