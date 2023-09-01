# dodamind/config-presets

This repository contains a collection of configuration presets for various development tools used in dodamind projects. 

## Packages Included

- [`@dodamind/eslint-config-dodamind`](./packages/eslint-config-dodamind/README.md): ESLint preset for dodamind projects.
- [`@dodamind/preset-prettier`](./packages/preset-prettier/README.md): Prettier config preset for dodamind projects.
- [`@dodamind/preset-tsconfig`](./packages/preset-tsconfig/README.md): tsconfig.json preset for dodamind projects.


## Installation

You can install each package individually as a dev dependency using npm:

For ESLint:

```sh
npm install @dodamind/eslint-config-dodamind --save-dev
```

For Prettier:

```sh
npm install @dodamind/preset-prettier --save-dev
```

For TypeScript:

```sh
npm install @dodamind/preset-tsconfig --save-dev
```

## Usage

### ESLint

Add to your `.eslintrc.cjs`:

```js
module.exports = {
  extends: [ 
    '@dodamind/eslint-config-dodamind',
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
  // ...
}
```

### TypeScript

Extend your `tsconfig.json`:

```json
{
  "extends": ["@dodamind/preset-tsconfig"],
  // ...
}
```

## License

See the [LICENSE](./LICENSE) file for details.

