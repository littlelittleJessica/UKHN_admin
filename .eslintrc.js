module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'no-undef': 'off',
    'vue/require-v-for-key': 'off',
    'no-unused-vars': 'off',
    'vue/valid-v-model': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/require-valid-default-prop': 'off'
  }
}
