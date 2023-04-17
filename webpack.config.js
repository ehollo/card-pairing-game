const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            inject: false,
        })
    ],
    mode: "development",
    devServer: {
        static: [__dirname + '/public', __dirname],

    }
}