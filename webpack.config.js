/* global require, __dirname, module */
var webpackMerge = require('webpack-merge'),
    path = require('path'),
    defaultConfig,
    webpackConfig;

webpackConfig = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/bootstrapapp.ts'
    },
    output: {
        path: './build'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            /*
            * Raw loader support for *.css files
            * Returns file content as string
            *
            * See: https://github.com/webpack/raw-loader
            */
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },

            /*
            * Raw loader support for *.css files
            * Returns file content as string
            *
            * See: https://github.com/webpack/raw-loader
            */
            {
                test: /\.scss$/,
                loader: 'raw-loader!sass-loader'
            },
            /*
            * Json loader support for *.json files.
            *
            * See: https://github.com/webpack/json-loader
            */
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: {
        'angular': 'angular'
    }
};

defaultConfig = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist')
        ]
    },

    resolve: {
        root: [
            path.join(__dirname, 'src')
        ],
        extensions: [
            '',
            '.ts',
            '.js'
        ],
        alias: {
            'blackbaud-skyux2': path.join(__dirname, 'node_modules', 'blackbaud-skyux2', 'src', 'modules', 'core.ts')
        }
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);
