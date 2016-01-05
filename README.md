[中文 README](#cn-make-your-react-app-work-in-ie8)

# Make your React app work in IE8

> I have realized that it's foolish to include all possible requirements in one package, because once them bundled into one js file, all required files will be included, although some may not useful.
>
> So [package `react-ie8`][package react-ie8] ***will be deprecated***.
>
> On the other hand, `react-ie8` will focus on providing a series of [Examples] for people who are facing the same compatibility problems, as will as collecting issues.
>
> Have fun with `react-ie8` [Examples], and feel free to [Open an issue].

## Usage

I highly recommend to use CommonJS style to include required packages.

First install these packages:

```shell
npm install --save es5-shim console-polyfill
```

Then insert the code below *to the beginning of your entry file*:

```js
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
```

See [React IE8 Hello World Example].

### Other Problems

Some problems are not actually the `React`'s problem, but I also list them below:

Error Message | Solution | Related Issue | Example
------------- | -------- | ------------- | -------
`Expected identifier` | Use [es3ify] or [es3ify-loader] | [#1] | [React IE8 Fetch IE8 Example]

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

错误信息 | 解决方案 | 相关 Issue | 示例
-------- | -------- | ---------- | ----
`Expected identifier` | 使用 [es3ify] 或者 [es3ify-loader] | [#1] | [React IE8 Fetch IE8 Example]

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
[React IE8 Hello World Example]: https://github.com/xcatliu/react-ie8/tree/master/examples/hello-world
[React IE8 Fetch IE8 Example]: https://github.com/xcatliu/react-ie8/tree/master/examples/fetch-ie8

[#1]: https://github.com/xcatliu/react-ie8/issues/1
