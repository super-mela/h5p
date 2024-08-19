const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.argv.includes('--mode=production')
  ? 'production'
  : 'development';

module.exports = {
  mode,
  entry: {
    'h5p-editor-topic-map': path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  target: ['browserslist'],
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  ...(mode !== 'production' && { devtool: 'eval-cheap-module-source-map' })
};
