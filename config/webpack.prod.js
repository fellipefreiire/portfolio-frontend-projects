const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/projects/latest/',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'projects',
      filename: 'remoteEntry.js',
      exposes: {
        './ProjectsApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}
