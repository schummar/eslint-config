module.exports = {
  extends: [
    //
    '@pvtnbr/eslint-config',
    'plugin:prettier/recommended',
  ],

  rules: {
    indent: ['error', 2],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: [
          //
          /test-d\.ts$/,
        ],
      },
    ],
    'no-plusplus': 'off',
    'max-params': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'unicorn/no-this-assignment': 'off',
  },

  overrides: [
    {
      files: '*.{ts,tsx,mts,cts,vue}',
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'off',
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
