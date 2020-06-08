const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.(png|svg|jpg|gif)$/,loader: 'file-loader'}
        ]
    },
    externals: {
        "oimo": true,
        "cannon": true,
        "earcut": true
    },
    mode: "development"
};