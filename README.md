[English README](#make-your-react-app-work-in-ie8)

# 使你的 React 应用兼容 IE8

> 一行代码搞定 IE8 的兼容性问题

## 使用方法

### CommonJS

若你使用 CommonJS 风格，引入 `react-ie8` 很简单，直接在***入口文件最前面***加上以下代码即可。

```js
require('react-ie8')(options);
```

## 配置

支持的配置：

### es5-shim

### es5-sham

### console-polyfill

## 参考

- [React 官方对 IE8 的支持][React official support for IE8]

<a id="make-your-react-app-work-in-ie8"></a>

# Make your React app work in IE8

> Solve compatibility problem with one liner code

## Usage

### CommonJS

If you are using CommonJS, It's quite easy to import react-ie8, just insert the code below ***to the beginning of your entry file***.

```js
require('react-ie8')(options);
```

## Options

Supported options:

### es5-shim

### es5-sham

### console-polyfill

## Reference

- [React official support for IE8][]

[React official support for IE8]: https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills
