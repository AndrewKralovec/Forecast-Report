var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            minimize: true,
            mangle: false
        })
    ]
};
