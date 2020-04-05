const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry : './app/index.js',
	output : {
		path : path.resolve(__dirname , 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module : {
		rules : [
			{test : /\.(js)$/, use:'babel-loader'},
			{test : /\.css$/, use:['style-loader', 'css-loader']}
		]
	},
	mode:'development',
	devServer: {
		historyApiFallback: true,
	},
	plugins : [
		new HtmlWebpackPlugin ({
			template : './app/index.html'
		}),
		new CopyWebpackPlugin([
			{ from: './app/assets', to: './assets' }
		])
	]
};