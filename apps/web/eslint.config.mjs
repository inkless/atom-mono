import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';

import typescriptConfig from '@atom/eslint-config/typescript';
import reactConfig from '@atom/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['dist'],
  },
  ...typescriptConfig,
  ...reactConfig,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
