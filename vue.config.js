const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
	publicPath: '',
	outputDir: 'www',
	productionSourceMap: false,
	configureWebpack: {
		plugins: [
		new VuetifyLoaderPlugin()
		]
	},
	chainWebpack: (config, ...rest) => {
		config.resolve.set('symlinks', false)
	}
}
