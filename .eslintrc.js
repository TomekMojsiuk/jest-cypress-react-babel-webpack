const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        // DESC add import resolver for jest custom module directories, so eslint does not throw error while importing them.
        // For this to work, we need to install eslint-import-resolver-jest
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
