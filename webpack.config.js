//console.log(__dirname)
const path = require('path')
//const 
const path1 = path.join(__dirname, 'public')
console.log(path1)
module.exports = {
    entry: './src/app.js',
    output: {
        path: path1,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        }]
    },
    devtool: 'cheap-module-eval-source-map',//it will show the error line,
    devServer: {
        contentBase: path1,
        historyApiFallback:true
    }


}