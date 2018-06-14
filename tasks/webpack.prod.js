var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config').default;
var publicPath = config.productPublishPath;
var outputPath = config.productOutputPath;

var prodConf = {
    //插件项
    plugins: [
        //生成独立样式文件
        new ExtractTextPlugin({
            filename: 'css/[name].css?[hash:8]',
            allChunks: true
        })
    ],
    //页面入口文件配置
    entry: getEntry(),
    //入口文件输出配置
    output: {
        path: path.join(__dirname, outputPath),
        publicPath: publicPath,
        filename: 'js/[name].js?[hash:8]'
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: [
                                'css-loader',
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        config: {
                                            path: 'tasks/postcss.config.js'
                                        }
                                    }
                                },
                                'sass-loader'
                            ],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },{
                loader: 'string-replace-loader',
                query: {
                    multiple: config.replace
                }
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    fallback: 'file-loader',
                    name: 'image/[name].[ext]?[hash:8]',
                    outputPath: 'image/'
                }
            }]
        }, {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2'],
                    plugins: ['transform-runtime']
                }
            },{
                loader: 'string-replace-loader',
                query: {
                    multiple: config.replace
                }
            }]
        }]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: config.alias
    },
    externals: config.global,
};

function getEntry() {
    var jsPath = path.resolve('src','pages');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.join(jsPath, item);
        }
    });
    return files;
}

var pages = Object.keys(getEntry());
pages.forEach(function (pathname) {
    var conf = {
        filename: 'html/' + pathname + '.html',
        template: 'src/template/index.html'
    }
    if (pathname in devConf.entry) {
        conf.chunks = [pathname];
        conf.hash = true;
    }
    //生成独立html文件
    devConf.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = prodConf;