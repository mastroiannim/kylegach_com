var Webpack = require("webpack");

exports.modifyWebpackConfig = function(config, stage) {
 
    // Create a plugin with the key 'context-replacement-plugin'.
    config.plugin("context-replacement-plugin", 
                  Webpack.ContextReplacementPlugin,
                  [/moment[\/\\]locale$/, /it/] 
                  );
  return config
}