var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const util = require('./util.config.js')
const publicPath = path.resolve(__dirname, '../public')

// import from util
const extractCSS = util.extractCSS
const getParameters = util.getParameters
const getRules = util.getRules

/** *********** END : IMPORT AREA ********** */
const moduleHtmls = [
  {
    title: 'Login',
    template: `${publicPath}/index.html`,
    filename: 'auth.html',
    chunks: ['auth']
  },
  {
    title: 'Home',
    template: `${publicPath}/index.html`,
    filename: 'index.html',
    chunks: ['home']
  },
  {
    title: 'Dashboard',
    template: `${publicPath}/index.html`,
    filename: 'dashboard.html',
    chunks: ['dashboard']
  },
]

const erpModuleChunks = [
  { key: 'auth', path: './modules/auth/index.tsx' },
  { key: 'home', path: './modules/home/index.tsx' },
  { key: 'dashboard', path: './modules/dashboard/index.tsx' },
]

const getEntryPoint = (options) => {
  const { dir } = getParameters(options)

  const entryPoints = {
  }
  erpModuleChunks.map(data => {
    entryPoints[data.key] = path.join(dir.app, data.path)
    return true
  })
  return entryPoints
}

/* BEGIN DEFINE PLUGIN */
const getPlugins = (options) => {
  const { env, isDebug, isProduction, dir, projectPath } = getParameters(
    options
  )
  const plugins = []

  plugins.push(extractCSS)
  // chi dinh bien moi truong
  plugins.push(new Dotenv({ path: `./webpack/${env}/.env` }))
  plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  plugins.push(
    new webpack.EnvironmentPlugin({
      NODE_ENV: isProduction ? 'production' : 'development',
      DEBUG_MODE: !!isDebug
    })
  )

  plugins.push(
    new CleanWebpackPlugin([dir.build], {
      root: projectPath,
      verbose: true,
      dry: false
    })
  )

  moduleHtmls.map((htmlFile) => {
    plugins.push(
      new HtmlWebpackPlugin({ ...htmlFile, hash: true })
    )
    return true
  })

  plugins.push(
    new CopyWebpackPlugin([
      {
        from: `${dir.public}/css`,
        to: `${dir.build}/css`
      }
    ])
  )
  plugins.push(
    new CopyWebpackPlugin([
      {
        from: `${dir.public}/fonts`,
        to: `${dir.build}/fonts`
      }
    ])
  )

  // Fix mising Promise for IE
  plugins.push(
    new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise'
    })
  )

  return plugins
}
/* END DEFINE PLUGIN */

// config export
const getConfig = function (options) {
  const { isProduction, dir } = getParameters(options)
  const plugins = getPlugins(options)
  return {
    context: dir.app,
    devtool: !isProduction ? 'inline-sourcemap' : false,
    entry: getEntryPoint(options),
    output: {
      path: dir.build,
      filename: 'js/[name].js?v=[hash]',
      publicPath: '/'
    },
    // định nghĩa bộ loader
    module: {
      rules: getRules(options)
    },
    // For development https://webpack.js.org/configuration/devtool/#for-development
    devServer: {
      historyApiFallback: {
        disableDotRule: true
      },
      port: 8080,
      disableHostCheck: true,
      host: 'react.local',
      open: true,
      inline: true,
      contentBase: dir.build
    },
    plugins,
    // định nghĩa lại đường dẫn và loại file load
    resolve: {
      modules: [
        dir.app,
        dir.public,
        path.resolve('./node_modules')
      ],
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', 'png', 'jpg', 'svg']
    },
    // hot reload
    watchOptions: {
      poll: true
    }
  }
}

module.exports = getConfig
