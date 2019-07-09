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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off'
  },
};
