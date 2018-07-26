var nodeLibsBrowser = require('node-libs-browser');
var builtinModules = require('builtin-modules');

var builtins = Object.create(null);
builtinModules.forEach(function (name) {
  builtins[name] = nodeLibsBrowser[name] == null
    ? require.resolve('./_empty.js')
    : nodeLibsBrowser[name];
});

builtins['_bundle_loader'] = require.resolve('./bundle-loader.js');
builtins['_css_loader'] = require.resolve('./css-loader.js');

module.exports = builtins;
