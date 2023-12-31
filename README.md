# dodamind/config-presets

This repository contains a collection of configuration presets for various development tools used in dodamind projects. 

## Packages Included

- [`@dodamind/eslint-config-dodamind`](./packages/eslint-config-dodamind/README.md): ESLint preset for dodamind projects.
- [`@dodamind/preset-prettier`](./packages/preset-prettier/README.md): Prettier config preset for dodamind projects.
- [`@dodamind/preset-tsconfig`](./packages/preset-tsconfig/README.md): tsconfig.json preset for dodamind projects.


## Installation

You can install each package individually as a dev dependency using bun or npm:

For ESLint:

```shell
bun add @dodamind/eslint-config-dodamind --dev

# or using npm
npm install @dodamind/eslint-config-dodamind --save-dev
```

For Prettier:

```shell
bun add @dodamind/preset-prettier --dev

# or using npm
npm install @dodamind/preset-prettier --save-dev
```

For TypeScript:

```shell
bun add @dodamind/preset-tsconfig --dev

# or using npm
npm install @dodamind/preset-tsconfig --save-dev
```

## Usage

### ESLint

Add to your `.eslintrc.cjs`:

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

### Prettier

Add to your `.prettierrc.cjs`:

```js
module.exports = {
  ...require('@dodamind/preset-prettier'),
}
```
Or to your `package.json`:

```json
{
  "prettier": "@dodamind/preset-prettier"
}
```

### TypeScript

Extend your `tsconfig.json`:

```json
{
  "extends": ["@dodamind/preset-tsconfig"]
}
```

## License

See the [LICENSE](./LICENSE) file for details.

