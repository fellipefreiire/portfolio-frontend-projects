// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8083/',
  },
  devServer: {
    hot: true,
    port: 8083,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'projects',
      filename: 'remoteEntry.js',
      exposes: {
        './ProjectsApp': './src/bootstrap',
        './Section': './src/components/Section/index.tsx',
      },
      remotes: {
        home: 'home@http://localhost:8080/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    // new ReactRefreshWebpackPlugin(),
  ],
}
