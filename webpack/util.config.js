/* eslint-disable no-multi-assign */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getParameters = function getParameters (options) {
  const path = require('path')
  const { env, isDebug } = options
  const projectPath = path.resolve(__dirname, '../')
  return {
    env,
    isDebug,
    projectPath,
    isProduction: env === 'prod',
    dir: {
      app: `${projectPath}/src`,
      public: `${projectPath}/public`,
      css: `${projectPath}/public/css`,
      scss: `${projectPath}/public/scss`,
      build: `${projectPath}/dist/${env}`,
      node_modules: `${projectPath}/node_modules`
    }
  }
}

const extractCSS = new MiniCssExtractPlugin({
  filename: 'css/[name].css?v=[hash]'
})

const getRules = function (options) {
  const { isProduction } = getParameters(options)
  return [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      options: {
        useBabel: true
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
    // Using here url-loader and file-loader
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/png'
          }
        }
      ]
    }
  ]
}

exports.getParameters = getParameters
exports.extractCSS = extractCSS
exports.getRules = getRules
