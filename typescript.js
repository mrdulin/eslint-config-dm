module.exports = {
  root: true,
  // files: ['**/*.ts', '**/*.tsx'],
  parser: '@typescript-eslint/parser',
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    'plugin:import/typescript',
    // 'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/strict-boolean-expressions': ['error'],
    // 'react/display-name': 'off',
    // 'react/prop-types': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/no-autofocus': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
  },
};
