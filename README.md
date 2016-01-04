[中文 README](#cn-make-your-react-app-work-in-ie8)

# Make your React app work in IE8

> Solve compatibility problem with one liner code

## Usage

### Installing

```shell
npm install react-ie8 --save
```

### CommonJS Style

If you are using CommonJS style, It's quite easy to import `react-ie8`, just insert the code below ***to the beginning of your entry file***.

```js
require('react-ie8');
```

If fact it equals to:

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

## Reference

- [examples]
- [React official support for IE8]
- [es5-shim]
- [es5-sham]
- [console-polyfill]
- [es6-promise]
- [fetch-ie8]


<a id="cn-make-your-react-app-work-in-ie8"></a>

# 使你的 React 应用兼容 IE8

> 一行代码搞定 IE8 的兼容性问题

## 使用方法

### Installing

```shell
npm install react-ie8 --save
```

### CommonJS 风格

若你使用 CommonJS 风格，引入 `react-ie8` 很简单，直接在***入口文件最前面***加上以下代码即可。

```js
require('react-ie8');
```

实际上，它等价于以下代码：

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

请查看[示例][examples]，获取更多使用方法。

## 参考

- [示例][examples]
- [React 官方对 IE8 的支持][React official support for IE8]
- [es5-shim]
- [es5-sham]
- [console-polyfill]
- [es6-promise]
- [fetch-ie8]


[React official support for IE8]: https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills
[examples]: https://github.com/xcatliu/react-ie8/tree/master/examples
[es5-shim]: https://github.com/es-shims/es5-shim
[es5-sham]: https://github.com/es-shims/es5-shim#shams
[console-polyfill]: https://github.com/paulmillr/console-polyfill
[es6-promise]: https://github.com/jakearchibald/es6-promise
[fetch-ie8]: https://github.com/camsong/fetch-ie8
