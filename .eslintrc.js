module.exports = {
  /* your base configuration of choice */
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb/base'],

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },

  rules: {
    // 'max-len': ['warn', { code: 80 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
  },
};
