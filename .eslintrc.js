module.exports = {
  extends: ['@pvtnbr/eslint-config'],

  rules: {
    indent: ['error', 2],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
  },

  overrides: [
    {
      files: '*.{ts,tsx,mts,cts,vue}',
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-explicit-any': 'off',
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
