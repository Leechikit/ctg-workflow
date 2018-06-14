var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config').default;
var host = '127.0.0.1';
var port = config.port;
var publicPath = '../';

var devConf = {
    //插件项
    plugins: [
        //代码热替换
        new webpack.HotModuleReplacementPlugin(),
        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: 'source-map',
    //页面入口文件配置
    entry: getEntry(),
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
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
                        ]
                    }
                }
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    fallback: 'file-loader',
                    name: '[name].[ext]?[hash:8]',
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
            }]
        }]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    externals: config.global,
    //dev-serve
    devServer: {
        contentBase: "./src",
        publicPath: '/',
        noInfo: true, //  --no-info option
        hot: true,
        inline: true,
        host: host,
        port: port,
        historyApiFallback: true
    }
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

module.exports = devConf;