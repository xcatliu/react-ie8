# react-ie8-router-example

React Router versions <= 2.3.0 works in IE8, version 2.4.0 breaking IE8 compatibility.

## Getting start
```shell
$ npm install
$ npm start
```
Open your browser at http://localhost:8080

## Try version 2.4.0
```shell
$ npm uninstall -S react-router@2.3.0
$ npm install -s react-router@2.4.0
$ npm start
```
It will throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);

For more info see: [version 2.4 breaking IE8 compatibility](https://github.com/ReactTraining/react-router/issues/3466)

## References
1. [xcatliu/react-ie8](https://github.com/xcatliu/react-ie8) (Learn how to make your React app work in IE8.)
2. [version 2.4 breaking IE8 compatibility](https://github.com/ReactTraining/react-router/issues/3466)