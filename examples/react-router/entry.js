/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

const Router = require('react-router').Router;
const Route = require('react-router').Route;

const Home = () => (
    <h1>Hello World</h1>
);

const AppRouter = () => (
    <Router>
        <Route path="/" component={Home}/>
    </Router>
);

ReactDOM.render(
    <AppRouter/>,
    document.getElementById('app')
);