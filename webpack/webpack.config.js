const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // modo desenvolvimento
    mode: 'development',
    entry: './src/principal.js',
    output: {
      filename: 'main.js', // the name of the output file
      path: path.resolve(__dirname, 'dist') // the directory where the output file will be saved
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
      }]
    }
}