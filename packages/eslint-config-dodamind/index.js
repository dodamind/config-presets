'use strict';

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:unicorn/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'operator-linebreak': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'one-var': ['error', 'never'],
    'no-cond-assign': ['error', 'except-parens'],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error'],
    'eol-last': ['error', 'always'],
    'new-parens': ['error', 'always'],
    'no-caller': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-lonely-if': ['error'],
    'no-debugger': ['error'],
    'no-duplicate-case': ['error'],
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-fallthrough': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
    'no-unused-labels': ['error'],
    'no-proto': ['error'],
    'no-regex-spaces': ['error'],
    'no-self-compare': ['error'],
    'no-sparse-arrays': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-negated-in-lhs': ['error'],
    'no-new-wrappers': ['error'],
    'no-self-assign': ['error'],
    'no-this-before-super': ['error'],
    'no-with': ['error'],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'no-undef-init': ['error'],
    'no-unsafe-finally': ['error'],
    'no-array-constructor': ['error'],
    'no-unreachable': ['error'],
    'no-multi-spaces': ['error'],
    'padded-blocks': ['error', 'never'],
    'rest-spread-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'use-isnan': ['error'],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'no-return-await': ['off'],
    'handle-callback-err': ['error', '^(err|error)$'],
    'max-len': [
      'error',
      {
        code: 120,
        comments: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
    ],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',

    // unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/better-regex': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-document-cookie': 'off',
    'unicorn/no-new-array': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/no-this-assignment': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/relative-url-style': 'off',
    'unicorn/template-indent': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: false,
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          ctx: false,
          env: false,
          props: false,
          v: {
            value: true,
            view: true,
            version: true,
          },
          cmd: {
            command: true,
          },
        },
      },
    ],
  },
};