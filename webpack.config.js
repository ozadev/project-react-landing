
"use strict";

module.exports = {
    entry: {
        "js/build/bundle": "./js/src/main.jsx"
    },
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ["es2015", "stage-0", 'react'],
                    plugins: ["transform-object-rest-spread", "transform-async-to-generator", "syntax-async-functions", "transform-runtime"]
                }
            }
        ]
    }
};