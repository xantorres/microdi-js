// notice_start
/*
 * Copyright 2015 Dev Shop Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// notice_end

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        sourcePrefix: '    ',
        library: 'microdi',
        path: './dist/',
        filename: 'microdi.js'
    },
    devtool: 'source-map',
    debug:true,
    module: {
        loaders: [
            {
                loader: "babel-loader",
                exclude: /(node_modules|dist|.idea)/,
                test: /\.js$/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    }
};