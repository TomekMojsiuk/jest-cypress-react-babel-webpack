const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    /*  DESC add everything that lives within a test directory to be able to be imported as if it was a node-module, i.e.:
    /   import { render } from '../../../test/calculator-test-utils' now ===
    /   import { render } from 'calculator-test-utils'
    */
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
}
