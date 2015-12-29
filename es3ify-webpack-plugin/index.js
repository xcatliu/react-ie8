/**
 * https://github.com/webpack/core/blob/master/lib/CachedSource.js
 * https://github.com/webpack/docs/wiki/how-to-write-a-plugin
 * https://github.com/webpack/docs/wiki/plugins
 * https://github.com/sorrycc/es3ify-loader/blob/master/index.js
 * https://github.com/webpack/webpack/blob/67656b90e2c4750a7a347dcefcefdf935fb39e1c/lib/optimize/UglifyJsPlugin.js
 */

var transform = require('es3ify').transform;
var RawSource = require('webpack/lib/RawSource');

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
        chunks.forEach(function(chunk) {
            chunk.files.forEach(function(file) {
                compilation.assets[file] = new RawSource(transform(compilation.assets[file].source()));
            });
        });
        callback();
    });
  });
};

module.exports = FileListPlugin;
