# Changelog

All notable changes to this package will be documented in this file.

## 2.0.0 - 2026-01-22
### Breaking
- Migrate to ESLint v9 flat config with `eslint.config.js` (ESM export).
- Require ESLint >= 9.20.0 as a peer dependency.

### Changed
- Adopt `@eslint/js`, `typescript-eslint`, and `@stylistic/eslint-plugin`.

## 2.0.1 - 2026-01-23
### Fixed
- Use core `one-var` rule (remove invalid `@stylistic/one-var`).
