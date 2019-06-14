// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {

    // 要求开发环境中允许使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-console': 'off',

    // 要求尽可能地使用单引号
    'quotes': ['error', 'single'],

    // 要求缩进采用2个空格
    'indent': ['error', 2],

    // 要求缩进采用2个空格
    'vue/html-indent': ['error', 2],

    // 可以不强制使用自闭合标签
    'vue/html-self-closing': 'off',

    'vue/no-parsing-error': [2, {

      'x-invalid-end-tag': false
    }],

    'vue/no-side-effects-in-computed-properties' : 'off'
  }
}
