const { merge } = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const devServer = {
    port: '9000',
    static: {
        directory: PUBLIC_DIR
    },
    open: true,
    compress: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    client: {
        overlay: {
            errors: true,
            warnings: true
        },
        progress: true
    }
};

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/'
    },
    devServer
});
