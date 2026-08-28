import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },

  js.configs.recommended,
  ...ts.configs.recommended,

  // Must come after the TS configs so the Astro parser wins for .astro files.
  ...astro.configs.recommended,

  {
    files: ['**/*.{js,mjs,ts,astro}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Astro components legitimately use `Astro.props` destructuring with
      // unused rest siblings; keep unused-vars useful but not noisy.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
