import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import lodashPlugin from 'eslint-plugin-lodash'
import prettierPlugin from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  {
    ignores: [
      'node_modules',
      'build',
      'dist',
      '**/*.next/**/*',
      '**/node_modules/**/*',
      '**/dist/**/*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        browser: 'readonly',
        node: 'readonly',
        commonjs: 'readonly',
        es6: 'readonly',
        jest: 'readonly',
        mocha: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      lodash: lodashPlugin,
      prettier: prettierPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'prefer-const': 'error',
      'jsx-a11y/accessible-emoji': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-extra-semi': 'off',
      'no-eq-null': 'error',
      'prefer-spread': 'error',
      'no-const-assign': 'error',
      eqeqeq: 'error',
      'no-duplicate-imports': 'error',
      strict: 'error',
      'no-invalid-regexp': 'error',
      'valid-typeof': 'error',
      'no-empty-function': 'error',
    },
  },
  {
    files: ['*.js', '*.jsx'],
    rules: {
      strict: 'error',
    },
  },
  {
    files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['next.config.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: ['@mui'],
          patterns: [
            {
              group: ['@mui/*'],
              message: 'Importing from @mui is not allowed in the src project.',
            },
            {
              group: ['libs/src/components/atoms/*'],
              message:
                'Importing from atoms is not allowed in the src project.',
            },
          ],
        },
      ],
    },
  },
]
