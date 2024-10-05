module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  plugins: [
    'simple-import-sort',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.vue', '.ts', '.json', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-tabs': 'off',
    'prefer-destructuring': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'import/extensions': ['error', {
      js: 'always',
      json: 'always',
      vue: 'always',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'global-require': 0,
    'vue/require-default-prop': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'warn',
  },
};
