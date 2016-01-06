[中文 README](#cn-make-your-react-app-work-in-ie8)

# Make your React app work in IE8

> I have realized that it was foolish to include all possible requirements in one package, because once they are bundled into one js file, all required files will be included, although some may not be useful.
>
> So [package `react-ie8`][package react-ie8] ***will be deprecated***.
>
> In addition, `react-ie8` will focus on providing a series of [Examples] for people who are facing the same compatible problems, as will as collecting issues.
>
> Have fun with `react-ie8` [Examples], and feel free to [Open an issue].

## Usage

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

See [React IE8 Hello World Example].

### Other Problems

Some problems are actually not the problem of `React`, but I also list them below:

Error Message | Reason | Solution | Related Issue | Example
------------- | ------ | -------- | ------------- | -------
`Expected identifier` | Reserved words such as `default` are used in your code or in third party packages | Use [es3ify] or [es3ify-loader] to transform your code | [#1] | [Fetch IE8]
`Exception thrown and not caught` | Babel transforms your `import` to `Object.defineProperty` which doesn't exist in IE8 | Insert `require('es5-shim')` `require('es5-shim/es5-sham')` in the top of your entry file, and DONOT use `import` in your entry file | [#2] | [Hello World]
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

> 我意识到把所有可能需要的依赖都引入是一种很愚蠢的行为，因为一旦他们被 bundle 到一个 js 文件中，所有的依赖都被引入了，尽管有些没有用上。
>
> 所以[模块 `react-ie8`][package react-ie8] ***将会被废弃***。
>
> 另一方面，`react-ie8` 将把重心移入提供一系列的[示例][Examples]和收集 issues，以便于给遇到兼容性问题的人一个参考。
>
> 快去查看 `react-ie8` [示例][Examples]吧，也欢迎[提交 issue][Open an issue]。

## 用法

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

参考：[React IE8 Hello World Example]。

### 其他问题

一些问题其实并不是 `React` 的问题，不过我也把他们列出来了：

错误信息 | 原因 | 解决方案 | 相关 Issue | 示例
-------- | ---- | -------- | ---------- | ----
`Expected identifier` | 代码中或者第三方模块中使用了保留字，比如 `default` | 使用 [es3ify] 或者 [es3ify-loader] | [#1] | [Fetch IE8]
`Exception thrown and not caught` | babel 把 `import` 编译成了 `Object.defineProperty`，而 IE8 中没有这个方法 | 把 `require('es5-shim')` `require('es5-shim/es5-sham')` 插入到入口文件的最上方，并且在入口文件中不能使用 `import` | [#2] | [Hello World]
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


[package react-ie8]: https://www.npmjs.com/package/react-ie8
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
