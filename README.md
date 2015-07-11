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

React 中使用了 `console.*`，故需要 `console-polyfill` 来使旧浏览器不报错。

`console-polyfill` 提供了 `component`, `bower` 或者 `npm` 的方式引入。

## HTML5 shiv (optional)

如果你用到了一些 HTML5 的标签，比如 `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` 等，那么需要引入 HTML5 shiv。

由于需要在文档解析前引入，故最好将它以 `script` 标签的形式插入到 `head` 中，注意最好添加对 IE 的识别，只在小于 IE9 的浏览器中引用即可：

```html
<!--[if lt IE 9]>
  <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

HTML5 shiv 支持 bower 的方式安装。

## Respond.js (optional)

如果你用到了 `min/max-width CSS3 Media Queries`，那么需要引用 `Respond.js`。

由于 Bootstrap 使用了这个，所以依赖于 Bootstrap 的项目需要引用 `Respond.js`。

`bower` 安装后，直接在 `head` 中插入即可。

## Trouble Shooting

### Respond.js 不支持跨域

由于 Respond.js 使用了 Ajax 去请求你的 css 文件，所以需要针对跨域的 Respond.js 做一些额外的适配。

### Promise undefined

IE8 下没有 Promise，建议使用 [es6-promise](https://github.com/jakearchibald/es6-promise)。
