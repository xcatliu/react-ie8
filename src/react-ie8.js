/* eslint dot-notation:0 */

const defaultOptions = {
  'es5-shim': true,
  'es5-sham': true,
  'console-polyfill': true,
  // 'html5shiv': false,
  // 'core-js': false,
  // 'es6-promise': false,
  // 'fetch-polyfill': false,
  // 'formdata-polyfill': false,
  // 'font-face': false,
};

module.exports = function reactIE8(options = {}) {
  const finalOptions = Object.assign({}, defaultOptions, options);
  if (finalOptions['es5-shim']) require('es5-shim');
  if (finalOptions['es5-sham']) require('es5-shim/es5-sham');
  if (finalOptions['console-polyfill']) require('console-polyfill');
};
