module.exports = {
  extends: [
    //
    '@pvtnbr/eslint-config',
    'plugin:prettier/recommended',
  ],

  rules: {
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: [
          //
          /test-d\.ts$/,
          /README\.md$/,
        ],
      },
    ],
    'no-plusplus': 'off',
    'max-params': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'unicorn/no-this-assignment': 'off',
    'no-console': ['warn', { allow: ['error', 'warn', 'debug', 'info'] }],
    'import/max-dependencies': 'off',
    'react/prop-types': 'off',
    complexity: 'off',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true,
        'prefer-inline': true,
      },
    ],
  },

  overrides: [
    {
      files: '*.{ts,tsx,mts,cts,vue}',
      rules: {
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
      },
    },

    {
      files: '*.{jsx,tsx}',
      extends: ['plugin:react/jsx-runtime'],
    },

    {
      files: '*.{json,json5,jsonc}',
      rules: {
        'jsonc/indent': ['error', 2],
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
