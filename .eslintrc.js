module.exports = {
  extends: [
    //
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2021,
  },

  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },

  rules: {
    'no-plusplus': 'off',
    'max-params': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': ['warn', { allow: ['error', 'warn', 'debug', 'info'] }],
    'import/max-dependencies': 'off',
    complexity: 'off',
    'import/no-duplicates': [
      'warn',
      {
        considerQueryString: true,
        'prefer-inline': true,
      },
    ],
    'max-nested-callbacks': 'off',
    'node/no-unpublished-import': 'off',
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
  },

  overrides: [
    {
      files: '*.{ts,tsx,mts,cts,vue}',
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'inline-type-imports',
          },
        ],
        'node/file-extension-in-import': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
  ],

  ignorePatterns: [
    //
    '**/node_modules/**',
    '{tmp,temp}/**',
    '**/*.min.js',
    '**/vendor/**',
    '**/dist/**',
    '**/coverage/**',
  ],
};
