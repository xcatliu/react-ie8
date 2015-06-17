使你的 React 应用兼容 IE8
===

来自 [NET Market Share](http://marketshare.hitslink.com/browser-market-share.aspx?qprid=2&qpcustomd=0&qpsp=196&qpnp=1&qptimeframe=M) 的数据表明，2015 年五月，全球浏览器份额中，IE6 占比仅有 0.85%，IE7 仅有 0.38%，但是 IE8 还有 14.79% 的份额，所以兼容到 IE8 还是有必要的。

幸运的是 React 对 IE8 是兼容的<sup>[[1]](https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills)</sup>。但是需要做一些额外的配置：

## es5-shim.js

`es5-shim.js` 提供了一些 EcmaScript 5 语法的支持，其中这些是被 React 使用了的：

```
Array.isArray
Array.prototype.every
Array.prototype.forEach
Array.prototype.indexOf
Array.prototype.map
Date.now
Function.prototype.bind
Object.keys
String.prototype.split
String.prototype.trim
```

当然，一旦你引用了 `es5-shim.js`，那么[这些方法](https://github.com/es-shims/es5-shim#shims)都可以随意使用了。

`es5-shim.js` 支持 AMD，CommonJS 或者直接以 `script` 标签的形式插入到 html 中。

使用 `bower install es5-shim` 或者 `npm install es5-shim` 之后即可引用，参考这个例子。

## es5-sham.js

`es5-sham.js` 提供了其他的一些 ES5 语法的支持，其中这些是被 React 使用了的：

```
Object.create
Object.freeze
```

尽管 `es5-sham.js` 实现了所有其他的 ES5 语法，但是有很多实现仅仅只是为了让它在老浏览器中不会报错，也就是说，调用[这些方法](https://github.com/es-shims/es5-shim#may-fail)，会默默的失败。

然而，一旦你引用了 `es5-sham.js`，那么[这些方法](https://github.com/es-shims/es5-shim#shams)是可以随意使用的。

`es5-sham.js` 的引用方式同 `es5-shim.js`。

`es5-sham.js` 需要在 `es5-shim.js` 之后引用，而这两者都得在调用 ES5 语法之前引用。

## console-polyfill



## HTML5 shiv (optional)

## Respond.js (optional)

## 注意事项