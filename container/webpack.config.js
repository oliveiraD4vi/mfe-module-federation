const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'Container',
      remotes: {
        Products: 'Products@http://localhost:8081/remoteEntry.js',
        Cart: 'Cart@http://localhost:8082/remoteEntry.js',
      }
    }),
  ],
};
