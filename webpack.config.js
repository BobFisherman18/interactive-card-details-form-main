const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          // JSX and JavaScript files handled by Babel
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
          // CSS files
        {
          test: /\.css$/i, // Files ending in .css
          use: ['style-loader', 'css-loader'], // Process CSS files and inject into the DOM
        },
              // Image files
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i, // File types to be processed
          type: 'asset/resource', // Webpack's asset/resource module handles images
          generator: {
            filename: 'images/[name][hash][ext]', // Filename pattern for output images
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true,
      open: true,
    },
  };
};