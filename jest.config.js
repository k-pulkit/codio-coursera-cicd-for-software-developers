module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__tests__/jest/__mocks__/styleMock.js',
  }
};