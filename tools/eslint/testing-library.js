import testingLibraryPlugin from 'eslint-plugin-testing-library';

/** @type {import('typescript-eslint').Config} */
export default [
  {
    files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    plugins: {
      'testing-library/react': testingLibraryPlugin,
    },
  },
];
