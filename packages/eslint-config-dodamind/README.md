# @dodamind/eslint-config-dodamind

ESLint preset for dodamind projects.

## Install

```sh
bun add @dodamind/eslint-config-dodamind --dev

# or using npm
npm install @dodamind/eslint-config-dodamind --save-dev
```
## Usage
### .eslintrc.cjs
```diff
module.exports = {
  extends: [
-   'eslint:recommended',
-   'plugin:@typescript-eslint/recommended',
+   '@dodamind/eslint-config-dodamind',
    // ...
  ],
  rules: {
    // ...
  },
}
```
