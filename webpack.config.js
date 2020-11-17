var path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
    minimizer: DEV? [] : new UglifyJSPlugin({
		sourceMap: true,
		uglifyOptions: {
			warnings: false,
			cache: true,
			parallel: true,
			output: {
				comments: false
			}
		}
	});
    mode: 'development',
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: DEV ? 'cheap-module-source-map' : 'hidden-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: DEV ? [] : new CompressionPlugin({
		filename: '[path][query]',
		algorithm: 'gzip',
		test: /\.js$|\.css$|\.svg$/,
		exclude: 'criticalCss'
	})
}
