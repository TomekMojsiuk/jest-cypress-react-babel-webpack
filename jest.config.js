module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // DESC use module-mapper to resolve anything ending in '.css' into a different module. In our case we want it to resolve into a module we declared in the style-mock.js file.
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
