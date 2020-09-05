const modulePath = require('path');
const merge = require('webpack-merge');
const commonConfig = require('../common/webpack.config.js');

const outDir = '../../public';

const developmentConfig = merge(commonConfig, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		inline: true,
		contentBase: modulePath.resolve(__dirname, `${outDir}`),
		hot: true,
		historyApiFallback: true
	},
	output: { filename: '[name].js' },
	devServer: { port: 9001	}
});

module.exports = developmentConfig;