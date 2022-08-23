const autoprefixer = require('autoprefixer')  // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/';

module.exports = {
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 8080,
		//以上的ip和端口是我们本机的;下面为需要跨域的
		proxy: {  //配置跨域
			// [process.env.VUE_APP_BASE_API]: {
			// 	target: `https://www.max68888.com`,
			// 	changeOrigin: true,
			// 	pathRewrite: {
			// 		['^' + process.env.VUE_APP_BASE_API]: ''
			// 	}
			// },

			'/upload': {
				target: `http://47.52.207.130:9000`,
				changeOrigin: true,
				pathRewrite: {
					'^/upload': '/upload'
				}
			}
		}
	},
	// Eslint检测
	lintOnSave: false,
	publicPath: BASE_URL,
	assetsDir: './',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 37.5, // 根字体大小，如果设计图是750的话 记得除2
						unitPrecision: 5,
						propList: ['*'], // 作用在哪些属性上 我这里用的是通配符
						selectorBlackList: ['vant-'], // 将哪些html元素排除在外，我这里添加了一个vant的
						replace: true,
						mediaQuery: false,
						minPixelValue: 0,
						exclude: /node_modules/i
					})
				]
			}
		}
	}

}
