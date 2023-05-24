const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    // modo desenvolvimento
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
      filename: 'main.js', // the name of the output file
      path: path.resolve(__dirname, 'dist') // the directory where the output file will be saved
    },
    optimization: {
      minimize: true,
      minimizer: [
        new terserWebpackPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
          },
        }),
        new cssMinimizerWebpackPlugin({})
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'estilo.css'
      })
    ],
    module: {
      rules: [{
        test: /\.s?[ac]ss$/, //regex para ler um arquivo scss/sass/css
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
          'sass-loader',
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name].[hash][ext]'
        },
        use: ['file-loader']
      }]
    }
}