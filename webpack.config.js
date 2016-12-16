const webpack = require('webpack');
const path = require('path');


module.exports = {
	entry: {
		index: './index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					compact: false
				},
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".js", ".json", ".jsx"]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./manifest.json'),
		}),
	]
};
