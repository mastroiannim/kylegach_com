var Webpack = require("webpack");

exports.modifyWebpackConfig = function(config, stage) {
 
    // Create a plugin with the key 'webpack-define'.
    config.plugin("context-replacement-plugin", Webpack.DefinePlugin, [
        new Webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it/)    
    ]);
    
  return config
}