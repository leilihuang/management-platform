const path = require('path');
const webpack = require('webpack');
// 插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 项目配置文件
const project = require('./project.config');
// 环境变量
const __DEV__ = project.env === 'development';
const __TEST__ = project.env === 'test';
const __SOURCE__ = project.env === 'source';
const __PROD__ = project.env === 'production';
// 提取css
const extractStyles = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  allChunks: true,
  disable: __DEV__,
});
// 配置信息
const config = {
  mode: __DEV__ ? 'development' : 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash:6].js',
    chunkFilename: 'js/[name]-[chunkhash:6].js',
    publicPath: project.publicPath
  },
  devtool: __DEV__ ? 'source-map' : 'eval',
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'ROOT': path.resolve(__dirname, 'src'),
    },
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8192,
            // publicPath: 'dist',
            name: 'images/[name]-[hash].[ext]',
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            // publicPath: 'dist',
            limit: 10000,
          }
        }]
      }
    ]
  },
  plugins: [
    extractStyles,
    new HtmlWebpackPlugin({
      title: 'react模板',
      hash: true,
      cache: true,
      inject: true,
      minify: {
        collapseWhitespace: true,
      },
      template: './src/index.html',
      cdnUrl: project.publicPath
    }),
    new webpack.DefinePlugin(Object.assign({
      __DEV__,
      __TEST__,
      __PROD__,
      __SOURCE__,
    }, project.globals)),
    new CopyWebpackPlugin([
      {
        context: './src/static/',
        from: '*.*',
        to: 'static',
        flatten: true,
      }
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/lib/vendor-manifest.json')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};

const _use = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: project.sourcemaps,
    }
  }
];

if (project.isPhone) {
  _use.push({
    loader: 'postcss-loader',
    options: {
      sourceMap: project.sourcemaps,
    }
  });
}
_use.push({
  loader: 'sass-loader',
  options: {
    sourceMap: project.sourcemaps,
  },
});

config.module.rules.push({
  test: /\.(sass|scss|css)$/,
  use: extractStyles.extract({
    fallback: 'style-loader',
    use: _use,
  })
});

if (__DEV__) {
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

if (__PROD__ || __SOURCE__ || __TEST__) {
  config.plugins.push(new CleanWebpackPlugin(['dist']));
}

module.exports = config;
