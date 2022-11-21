const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill","./src/index.jsx"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    devServer: {
        port:3000,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template:'./public/index.html'})
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|jpeg|svg)$/,
                use:["file-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
        ]
    }
}