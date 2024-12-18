import js from '@eslint/js';
import turboPlugin from 'eslint-plugin-turbo';

export default [
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      'turbo/no-undeclared-env-vars': [
        'error',
        {
          allowList: ['^EXPO_PUBLIC_.+$', 'EXPO_OS', 'NODE_ENV'],
        },
      ],
    },
  },
];
