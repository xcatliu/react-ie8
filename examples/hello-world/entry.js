/**
 * CANNOT use `import` to import `react-ie8`,
 * because `import` will be transformed to `Object.defineProperty`,
 * which doesn't exists in IE8 (but will be polyfilled after `require('react-ie8')()` executed).
 */
// import reactIE8 from 'react-ie8';
// reactIE8();

require('react-ie8')();

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('react-ie8')()`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('app')
);
