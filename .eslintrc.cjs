module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  root: true,

  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', '.prettierrc.json', '.stylelintrc.json', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    '@typescript-eslint/quotes': 'off',
    'react/destructuring-assignment': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
      },
    },
  },
};
