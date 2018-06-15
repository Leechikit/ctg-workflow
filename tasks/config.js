var path = require('path');
/*
 *  配置参数
 */
exports.default = {
	// 文件别名配置
	alias: {
		'vue$': 'vue/dist/vue.esm.js',
		'@': path.resolve(__dirname, 'src')
	},
	// 全局引入模块配置
	global: {
		'jquery': 'window.jQuery',
		'hiido_yylive_v3': 'window.hiido_yylive_v3',
		'yyApiUtil': 'window.yyApiUtil',
		'jweixin': 'window.wx'
	},
	replace: [{
		search: 'ysapitest.yy.com',
		replace: 'ysapi.yy.com',
		flags: 'g'
	}, {
		search: 'wtest.3g.yy.com',
		replace: 'wap.yy.com',
		flags: 'g'
	}, {
		search: 'webtest.yy.com',
		replace: 'web.yy.com',
		flags: 'g'
	}, {
		search: 'webtest.yystatic.com',
		replace: 'web.yystatic.com',
		flags: 'g'
	},{
		search: 'page-test.yy.com',
		replace: 'page.yy.com',
		flags: 'g'
	},{
		search: 'wtest.yy.com',
		replace: 'w.yy.com',
		flags: 'g'
	}],
	// 端口
	port: 3000,
	// 测试环境静态资源地址
	publicPath: '//webtest.yystatic.com/project/group_topic/ctg-workflow/pc/',
	// 生产环境静态资源地址
	productPublishPath: '//web.yystatic.com/project/group_topic/ctg-workflow/pc/',
	// 测试环境项目输出地址
	outputPath: '../dist/',
	// 生产环境项目输出地址
	productOutputPath: '../prod/'
}

