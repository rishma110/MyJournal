var path = require('path')
const DEV = process.env.NODE_ENV !== 'production'

module.exports = {
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
}
