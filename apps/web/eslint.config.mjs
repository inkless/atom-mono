import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'

import baseConfig from '@atom/eslint-config/base';
import reactConfig from '@atom/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['dist'] 
  },
  ...baseConfig,
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
