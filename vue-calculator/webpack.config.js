var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {scripts: './assets/js/src/index.js'},
    output: {
        filename: 'assets/js/dist/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("assets/css/app.css")
    ],
    resolve: {
        // alias: {
        //     // 'Vue': path.join(__dirname, 'vue/dist/vue.js')
        //     vue$: path.join(__dirname, 'vue/dist/vue.runtime.common.js')
        // }
    },
}