const nodeExternals = require('webpack-node-externals');

const clientConfig = {
    target: 'web',
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/public/assets/js',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    }
};

const serverConfig = {
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
    entry: {
        server: './server/src/server.jsx',
    },
    output: {
        path: __dirname + '/server/build',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false
    }
};

module.exports = [clientConfig, serverConfig];