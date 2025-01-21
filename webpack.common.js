const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new CleanWebpackPlugin(),
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.scss',
            failOnError: false,
            quiet: false,
        }),
        new ESLintPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    minimize: true,
                    partialDirs: [
                        path.join(__dirname, 'src/components/gallery/gallery-content-renderer'),
                        path.join(__dirname, 'src/components/gallery/gallery-navigation'),
                        path.join(__dirname, 'src/components/picture/'),
                        path.join(__dirname, 'src/components/descriptive-text/'),
                        path.join(__dirname, 'src/components/header'),
                        path.join(__dirname, 'src/components/descriptive-card'),
                    ],
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images/',
                },
            },
        ],
    },
};
