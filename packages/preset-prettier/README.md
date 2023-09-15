# @dodamind/preset-prettier

Prettier config preset for dodamind projects.

## Install

```sh
bun add @dodamind/preset-prettier --dev

# or using npm
npm install @dodamind/preset-prettier --save-dev
```
## Usage
### package.json
```json
{
  "prettier": "@dodamind/preset-prettier"
}
```
### .prettierrc.cjs
```js
module.exports = {
  ...require('@dodamind/preset-prettier'),
  // ...
}
```
