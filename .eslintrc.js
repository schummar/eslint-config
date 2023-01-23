module.exports = {
  extends: [
    '@pvtnbr/eslint-config',
  ],

  rules: {
    indent: ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
  },

  overrides: [
    {
      files: '*.{json,json5,jsonc}',
      rules: {
        'jsonc/indent': ['error', 2],
      },
    },
  ],
};
