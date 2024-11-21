import baseConfig from '@atom/eslint-config/base';
import reactConfig from '@atom/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.expo/**', 'expo-plugins/**'],
  },
  ...baseConfig,
  ...reactConfig,
];
