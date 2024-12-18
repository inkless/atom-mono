import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import pluginQuery from '@tanstack/eslint-plugin-query';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@tanstack/query': pluginQuery,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...pluginQuery.configs['flat/recommended'].rules,
    },
  },
];
