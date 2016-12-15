const webpack = require('webpack');
const path = require('path');


module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'echarts-for-react']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			path: 'manifest.json',
			name: '[name]',
			context: __dirname
		})
	]
};