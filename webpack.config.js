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
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
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
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    path.join(__dirname, 'node_modules', 'rxjs'),
                    path.join(__dirname, 'node_modules', '@angular2-material'),
                    path.join(__dirname, 'node_modules', '@angular')
                ]
            }
        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
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
            'angular2/testing': path.join(__dirname, 'node_modules', '@angular', 'core', 'testing.js'),
            '@angular2/testing': path.join(__dirname, 'node_modules', '@angular', 'core', 'testing.js'),
            'angular2/core': path.join(__dirname, 'node_modules', '@angular', 'core', 'index.js'),
            'angular2/platform/browser': path.join(__dirname, 'node_modules', '@angular', 'platform-browser', 'index.js'),
            'angular2/router': path.join(__dirname, 'node_modules', '@angular', 'router-deprecated', 'index.js'),
            'angular2/http': path.join(__dirname, 'node_modules', '@angular', 'http', 'index.js'),
            'angular2/http/testing': path.join(__dirname, 'node_modules', '@angular', 'http', 'testing.js')

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
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);
