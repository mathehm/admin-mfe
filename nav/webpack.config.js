// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

// module.exports = {
//   mode: 'development',
//   devServer: {
//     port: 8080,
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'nav',
//       remotes: {
//         app1: 'app1@http://localhost:8081/remoteEntry.js'
//       },
//     }),
//     new HtmlWebpackPlugin({
//       template: './public/index.html'
//     })
//   ]  
// };