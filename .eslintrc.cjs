module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': [
    'jsx-a11y',
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx', '.ts'] }],
    '@typescript-eslint/no-use-before-define': ['error', {
      'variables': false,
    }],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
    '@typescript-eslint/no-shadow': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};