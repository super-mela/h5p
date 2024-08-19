import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// Build dependencies are ok as devDependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);

const mode = process.argv.includes('--mode=production')
  ? 'production'
  : 'development';
const libraryName = process.env.npm_package_name;
const isProd = mode === 'production';

export default {
  mode,
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  entry: {
    dist: `./${libraryName}.ts`,
  },
  output: {
    filename: `${libraryName}.js`,
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  target: ['browserslist'],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: isProd ? undefined : 'eval-cheap-module-source-map',
};
