const webpack = require('webpack');
const path = require('path');

module.exports = {
    // modo desenvolvimento
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'main.js', // the name of the output file
        path: path.resolve(__dirname, 'dist') // the directory where the output file will be saved
      }
}