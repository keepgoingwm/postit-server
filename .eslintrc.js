module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-standard'
  ],
  env: {
    'es6': true,
    'node': true
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  rules: {
    'semi': 0,
    'no-multiple-empty-lines': 0,
    'no-new': 0,
    'padded-blocks': 0,
    'space-before-function-paren': 0,
    'standard/no-callback-literal': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
}