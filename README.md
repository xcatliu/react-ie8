[中文 README](#cn-make-your-react-app-work-in-ie8)

# Make your React app work in IE8

> It's really a dispiriting news that [Starting with React v15, we're discontinuing React DOM's support for IE 8][Discontinuing IE 8 Support in React DOM]. There are still [more than 18% people who are using IE8 in China][IE8-in-China].
>
> Anyway, `react-ie8` will continuously provide a series of [Examples] for people who are facing the same compatible problems, as well as collecting issues.
>
> Have fun with `react-ie8` [Examples], and feel free to [Open an issue].

## How to

First you shouldn't use React v15 or higher version anymore. Just use React v0.14 which still support IE8.

If you need docs for React v0.14, go to http://react-ie8.xcatliu.com

### Using CommonJS

I highly recommend to use CommonJS style to include required packages.

First install these packages:

```shell
npm install --save es5-shim console-polyfill
```

Then insert the code *into the beginning of your entry file*:

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

See [React IE8 Hello World Example][Hello World] for a real example.

### React Static Boilerplate

[React Static Boilerplate](https://github.com/jun0205/react-static-boilerplate) A React static boilerplate that supports IE8，To view [Demo](http://react-ie8.getfuli.com/)

### Other Problems

Some problems are actually not the problem of `React`, but I also list them below:

Error Message | Reason | Solution | Related Issue | Example
------------- | ------ | -------- | ------------- | -------
`Expected identifier` | Reserved words such as `default` are used in your code or in third party packages | Use [es3ify] or [es3ify-loader] to transform your code | [#1] | [Fetch IE8]
`Exception thrown and not caught` | Babel transforms your `export * from 'xxx'` to `Object.defineProperty` which doesn't support accessor property in IE8 | Insert `require('es5-shim')` `require('es5-shim/es5-sham')` in the top of your entry file, and DONOT use `export * from 'xxx'` in your code | [#2][#2] [#32][#32] | [Hello World]
`Object expected` | Perhaps you are using `fetch` without polyfilled | Use `es6-promise` and `fetch-ie8` to polyfill `fetch` | [#4] | [Fetch IE8]
`'Promise' is undefined` | `Promise` need to be polyfilled in IE8 | Use `es6-promise` to polyfill `Promise` | [#5] | [Fetch IE8]
`Object doesn't support this property or method` | Perhaps you are using `Object.assign` | Use `core-js` to polyfill | [#7] | [Object Assign]
`'JSON' is undefined` | Need to use IE8 Standards Mode | Add `<!DOCTYPE html>` and `<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>` | [#8] | [Hello World]

If you have other problems, please [Open an issue].

## Troubleshooting

[Troubleshooting in issues][Troubleshooting]

## Reference

- [Examples]
- [Troubleshooting]
- [React official support for IE8]
- [es5-shim]
- [es5-sham]
- [console-polyfill]
- [es6-promise]
- [fetch-ie8]


<a id="cn-make-your-react-app-work-in-ie8"></a>

# 使你的 React 应用兼容 IE8

> 一个令人失望的消息：[从 React v15 开始，React DOM 将不会再支持 IE8 了][Discontinuing IE 8 Support in React DOM]。而[中国还有超过 18% 的人在使用 IE8][IE8-in-China]。
>
> 无论如何，`react-ie8` 仍会提供一系列的[示例][Examples]，还会收集 issues，以便于给遇到兼容性问题的人一个参考。
>
> 快去查看 `react-ie8` [示例][Examples]吧，也欢迎[提交 issue][Open an issue]。

## 如何兼容 IE8

首先，你不应该使用 React v15 或更高版本。使用仍然支持 IE8 的 React v0.14 即可。

如果你需要查看 React v0.14 的文档，请访问：http://react-ie8.xcatliu.com

### 使用 CommonJS

强烈推荐使用 CommonJS 风格来引入需要的模块。

首先安装这些模块：

```shell
npm install --save es5-shim console-polyfill
```

然后把以下代码插入到*入口文件最前面*：

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

参考一个真实的例子：[React IE8 Hello World Example][Hello World]。

### 使用 React Static Boilerplate

[React Static Boilerplate](https://github.com/jun0205/react-static-boilerplate) 一个创建好的支持 IE8 的 React 静态模板，可以查看[演示](http://react-ie8.getfuli.com/)

### 其他问题

一些问题其实并不是 `React` 的问题，不过我也把他们列出来了：

错误信息 | 原因 | 解决方案 | 相关 Issue | 示例
-------- | ---- | -------- | ---------- | ----
`Expected identifier` | 代码中或者第三方模块中使用了保留字，比如 `default` | 使用 [es3ify] 或者 [es3ify-loader] | [#1] | [Fetch IE8]
`Exception thrown and not caught` | babel 把 `export * from 'xxx'` 编译成了 `Object.defineProperty`，而 IE8 中不支持 accessor property | 把 `require('es5-shim')` `require('es5-shim/es5-sham')` 插入到入口文件的最上方，并且在代码中不要使用 `export * from 'xxx'` | [#2][#2] [#32][#32] | [Hello World]
`Object expected` | 可能你使用了 `fetch` | 用 `es6-promise` 和 `fetch-ie8` polyfill | [#4] | [Fetch IE8]
`'Promise' is undefined` | `Promise` 需要 polyfill | 用 `es6-promise` polyfill | [#5] | [Fetch IE8]
`Object doesn't support this property or method` | 可能你使用了 `Object.assign` | 用 `core-js` polyfill | [#7] | [Object Assign]
`'JSON' is undefined` | 需要使用 IE8 Standards Mode | 添加 `<!DOCTYPE html>` 和 `<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>` | [#8] | [Hello World]

如果你遇到了其他问题，可以[提交一个 issue][Open an issue]。

## Troubleshooting

[Troubleshooting in issues][Troubleshooting]

## 参考

- [示例][Examples]
- [Troubleshooting]
- [React 官方对 IE8 的支持][React official support for IE8]
- [es5-shim]
- [es5-sham]
- [console-polyfill]
- [es6-promise]
- [fetch-ie8]

[Discontinuing IE 8 Support in React DOM]: https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html
[IE8-in-China]: http://tongji.baidu.com/data/browser
[React official support for IE8]: https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills
[Examples]: https://github.com/xcatliu/react-ie8/tree/master/examples
[Troubleshooting]: https://github.com/xcatliu/react-ie8/issues?utf8=%E2%9C%93&q=label%3Atroubleshooting
[Open an issue]: https://github.com/xcatliu/react-ie8/issues/new
[es5-shim]: https://github.com/es-shims/es5-shim
[es5-sham]: https://github.com/es-shims/es5-shim#shams
[console-polyfill]: https://github.com/paulmillr/console-polyfill
[es6-promise]: https://github.com/jakearchibald/es6-promise
[fetch-ie8]: https://github.com/camsong/fetch-ie8
[es3ify]: https://www.npmjs.com/package/es3ify
[es3ify-loader]: https://github.com/sorrycc/es3ify-loader
[Hello World]: https://github.com/xcatliu/react-ie8/tree/master/examples/hello-world
[Fetch IE8]: https://github.com/xcatliu/react-ie8/tree/master/examples/fetch-ie8
[Object Assign]: https://github.com/xcatliu/react-ie8/tree/master/examples/object-assign

[#1]: https://github.com/xcatliu/react-ie8/issues/1
[#2]: https://github.com/xcatliu/react-ie8/issues/2
[#4]: https://github.com/xcatliu/react-ie8/issues/4
[#5]: https://github.com/xcatliu/react-ie8/issues/5
[#7]: https://github.com/xcatliu/react-ie8/issues/7
[#8]: https://github.com/xcatliu/react-ie8/issues/8
[#32]: https://github.com/xcatliu/react-ie8/issues/32
