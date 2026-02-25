import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsFiles = ['**/*.{ts,tsx,cts,mts}'];

export default [
  js.configs.recommended,
  unicorn.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/operator-linebreak': ['error'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      'one-var': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/new-parens': ['error', 'always'],
      '@stylistic/no-mixed-spaces-and-tabs': ['error'],
      '@stylistic/no-multi-spaces': ['error'],
      '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true }],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          comments: 120,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
        },
      ],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'no-irregular-whitespace': ['error'],
      'no-cond-assign': ['error', 'except-parens'],
      eqeqeq: ['error', 'always'],
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
      'no-unsafe-negation': ['error'],
      'no-new-wrappers': ['error'],
      'no-self-assign': ['error'],
      'no-this-before-super': ['error'],
      'no-with': ['error'],
      'no-undef-init': ['error'],
      'no-unsafe-finally': ['error'],
      'no-array-constructor': ['error'],
      'no-unreachable': ['error'],
      'use-isnan': ['error'],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      curly: ['error', 'all'],
      'no-return-await': 'off',
      'handle-callback-err': ['error', '^(err|error)$'],

      // unicorn
      'unicorn/better-regex': 'off',
      'unicorn/consistent-destructuring': 'error',
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
  },
  ...tseslint.configs.recommended,
  {
    files: tsFiles,
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': 'allow-with-description' },
      ],
      '@stylistic/member-delimiter-style': ['error'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['interface', 'type'],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
      ],
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-shadow': 'error',
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
    },
  },
];
