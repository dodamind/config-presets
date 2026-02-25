# @dodamind/eslint-config-dodamind

ESLint preset for dodamind projects.

## Requirements

- ESLint >= 9.20.0 (flat config)

## Install

```sh
bun add @dodamind/eslint-config-dodamind --dev

# or using npm
npm install @dodamind/eslint-config-dodamind --save-dev
```
## Usage
### eslint.config.mjs (ESLint v9+ flat config)
```js
import dodamind from '@dodamind/eslint-config-dodamind';

export default [
  ...dodamind,
  // overrides here
];
```

If your project uses `"type": "module"`, you can use `eslint.config.js` instead of
`eslint.config.mjs`.
