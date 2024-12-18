import baseConfig from '@atom/eslint-config/base';
import typescriptConfig from '@atom/eslint-config/typescript';
import reactConfig from '@atom/eslint-config/react';
import testingLibraryConfig from '@atom/eslint-config/testing-library';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [
      '.expo/**',
      'expo-plugins/**',
      '.turbo/**',
      'node_modules/**',
      'ios/**',
      'android/**',
    ],
  },
  ...baseConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...testingLibraryConfig,
];
