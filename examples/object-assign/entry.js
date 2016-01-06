/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('react-ie8');
require('core-js/fn/object/assign');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('react-ie8')()`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

const oldData = {
  hello: 'World',
};

const newData = Object.assign({}, oldData, {
  hello: 'New World',
});

ReactDOM.render(
  <h1>{newData.hello}</h1>,
  document.getElementById('app')
);
