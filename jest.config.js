const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/**/*.test.tsx'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  collectCoverageFrom: [
    'src/**/**/*.{tsx, ts}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/storybook/',
    '!<rootDir>/src/**/**/*.stories.{tsx, ts}',
    '!<rootDir>/src/**/**/*.test.{tsx, ts}',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
};
