import { dirname, resolve as _resolve, join } from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin'; // Provided by webpack

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mode = process.argv.includes('--mode=production') ?
  'production' :
  'development';
const libraryName = process.env.npm_package_name;

export default {
  mode: mode,
  resolve: {
    alias: {
      '@assets': _resolve(__dirname, 'src/assets'),
      '@components': _resolve(__dirname, 'src/scripts/components'),
      '@mixins': _resolve(__dirname, 'src/scripts/mixins'),
      '@root': _resolve(__dirname, '.'),
      '@scripts': _resolve(__dirname, 'src/scripts'),
      '@services': _resolve(__dirname, 'src/scripts/services'),
      '@styles': _resolve(__dirname, 'src/styles')
    }
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: mode === 'production',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress:{
            drop_console: true,
          }
        }
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendor'
        },
        html2canvas: {
          test: /[\\/]node_modules[\\/]html2canvas/,
          priority: -5,
          reuseExistingChunk: true,
          name: 'html2canvas',
        },
        docx: {
          test: /[\\/]node_modules[\\/]docx/,
          priority: -5,
          reuseExistingChunk: true,
          name: 'docx',
        },
        jspdf: {
          test: /[\\/]node_modules[\\/]jspdf/,
          priority: -5,
          reuseExistingChunk: true,
          name: 'jspdf',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${libraryName}.css`
    })
  ],
  entry: {
    'h5peditor-portfolio': './src/entries/dist.js'
  },
  output: {
    filename: '[name].js',
    path: _resolve(__dirname, 'dist'),
    clean: true
  },
  target: ['browserslist'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        include: join(__dirname, 'src/assets'),
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        include: join(__dirname, 'src/fonts'),
        type: 'asset/resource'
      }
    ]
  },
  stats: {
    colors: true
  },
  ...(mode !== 'production' && { devtool: 'eval-cheap-module-source-map' })
};
