# Reproduce Parcel bug [#9414](https://github.com/parcel-bundler/parcel/issues/9414)

This repo is a minimal reproduction of a bug in Parcel v2.10.3.

## Steps to reproduce

1. Clone this repo
2. Run `npm install` using Node.js v18+
3. Run `npm start`
4. Open http://localhost:8080 in your browser
5. Open the browser's console

You should see the following error:

```
Uncaught SyntaxError: The requested module './dist/my-counter.js' does not provide an export named 'MyCounter'
```

## Expected behavior

There should be a named export `MyCounter` in the generated file `dist/my-counter.js` so that it can be imported like this:

```js
import { MyCounter } from './dist/my-counter.js';
```

## Actual behavior

In the generated file `dist/my-counter.js` there is no `export` statement for the `MyCounter` class.
On the other hand, in the `dist/my-counter-defined.js` file there is a named export for the `MyCounter` class.