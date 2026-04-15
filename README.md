# ag-eslint-ts

<p align="left">
  Shared <b>ESLint</b> & <b>TypeScript</b> configuration for streamlined development.
</p>

<p align="left">
  <a href="https://www.npmjs.com/package/@alexey-gara/ag-eslint-ts">
    <img src="https://img.shields.io/npm/v/@alexey-gara/ag-eslint-ts" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@alexey-gara/ag-eslint-ts">
    <img src="https://img.shields.io/npm/dm/@alexey-gara/ag-eslint-ts" alt="npm downloads" />
  </a>
  <a href="https://github.com/AlexeyGara/ag-eslint-ts?tab=readme-ov-file#license">
    <img src="https://img.shields.io/github/license/alexey-gara/ag-eslint-ts" alt="license" />
  </a>
</p>

---

## Features

- ✅ Preconfigured **ESLint** rules
- ✅ Ready-to-use **TypeScript** setup
- ✅ Integrated **Prettier**
- ✅ Supports **Flat Config (ESLint v9+)**
- ✅ Backward compatibility with **ESLint v8**
- ✅ Works with `pnpm` monorepos

---

## Installation

> [!TIP]
> Recommended for **ESLint v9+ (Flat Config)** and **TypeScript v5+**:

```bash
pnpm add -D @alexey-gara/ag-eslint-ts eslint typescript prettier
```

For older IDEs that do **not support ESLint v9+ (Flat Config)** and/or **TypeScript v5+**  
_(e.g., IDEA 2022.2 and earlier)_:

```bash
pnpm add -D @alexey-gara/ag-eslint-ts eslint@8.57.1 typescript@4.9.5 prettier@3.5.3
```

---

## Usage

### ESLint Setup

#### Modern (Flat Config, ESLint v9+)

Create `eslint.config.mjs` in the root of your project (next to `project.json`):

```js
import agConfig from '@alexey-gara/ag-eslint-ts';

export default [
  ...agConfig,
  {
    rules: {
      // your custom rules here
    }
  }
];
```

---

#### Legacy (ESLint v8)

For older IDEs without Flat Config support:

Create `.eslintrc.cjs`:

```js
module.exports = {
  extends: [
    require.resolve('@alexey-gara/ag-eslint-ts')
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    // your custom rules here
  }
};
```

---

### pnpm Compatibility

Before installing dependencies, create a `.npmrc` file in your project root:

```ini
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*prettier*
```

> [!NOTE]
> `pnpm` stores dependencies (like `eslint-plugin-import`) inside a virtual store.  
> This configuration ensures ESLint can properly resolve plugins.

---

### TypeScript Setup

Extend your `tsconfig.json`:

```json
{
  "extends": "@alexey-gara/ag-eslint-ts/tsconfig.json",
  "compilerOptions": {
    // your project's TypeScript compiler options
  },
  "include": [
    // files to include
  ],
  "exclude": [
    // files and folders to exclude
  ]
}
```

---

## Example

Minimal project setup:

```bash
pnpm add -D @alexey-gara/ag-eslint-ts eslint typescript prettier
```

`eslint.config.mjs`:

```js
import agConfig from '@alexey-gara/ag-eslint-ts';

export default agConfig;
```

---

## FAQ

### Why do I need `.npmrc`?

Because `pnpm` isolates dependencies.  
Without hoisting, ESLint may fail to find plugins like `eslint-plugin-import`.

---

### Does this work with monorepos?

Yes.  
This config is designed to work well with `pnpm` workspaces and monorepos.

---

### Can I override rules?

Absolutely:

```js
export default [
  ...agConfig,
  {
    rules: {
      'no-console': 'warn'
    }
  }
];
```

---

### Do I need Prettier separately?

Yes — Prettier is included in the setup but must still be installed as a dependency.

---

## License

MIT

---

## ESLint Rules Overview

This configuration extends multiple rule sets and plugins and is based on:
- `typescript-eslint` recommended rules
- `eslint-plugin-import`
- `@stylistic/eslint-plugin-ts`
+ full list of rules are here [.eslint-rules.json](https://github.com/AlexeyGara/ag-eslint-ts/blob/main/.eslint-rules.json)

To see the full resolved list of rules used in your project, run:

```bash
npx eslint --print-config index.ts
```

> Replace `index.ts` with any file from your project.

## TypeScript Configuration Overview

This package provides a base `tsconfig.json` with strict and modern TypeScript setup.

### Target & Environment

- `target`: `ES2020`
- `module`: `ESNext`
- `lib`: `ES2020`, `DOM`, `DOM.Iterable`
- `moduleResolution`: `node`

---

### Core Features

- Decorators enabled:
    - `experimentalDecorators`
    - `emitDecoratorMetadata`

- Optimized for bundlers:
    - `isolatedModules`
    - `moduleDetection: "force"`
    - `noEmit: true`

---

### Strictness

Strict mode is fully enabled:

- `strict`
- `strictNullChecks`
- `strictFunctionTypes`
- `strictBindCallApply`
- `strictPropertyInitialization`

---

### Safety Rules

- `noImplicitAny`
- `noImplicitThis`
- `noImplicitReturns`
- `noImplicitOverride`

---

### Code Quality

- `noUnusedLocals`
- `noUnusedParameters`
- `noFallthroughCasesInSwitch`
- `noPropertyAccessFromIndexSignature`

---

### Trade-offs / Relaxed Rules

These are intentionally less strict for better DX:

- `useUnknownInCatchVariables: false`
- `noUncheckedIndexedAccess: false`
- `exactOptionalPropertyTypes: false`

---

To inspect the fully resolved configuration, run:

```bash
npx tsc --showConfig
```
