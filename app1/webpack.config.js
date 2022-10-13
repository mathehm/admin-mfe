// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

// module.exports = {
//   mode: 'development',
//   devServer: {
//     port: 8081,
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'app1',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './App1': './src/App.vue'
//       }
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/index.html'
//     })
//   ]  
// };