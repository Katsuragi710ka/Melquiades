const modulePath = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('../common/webpack.config.js');
const publicDir = '../../public';

const productionConfig = merge(commonConfig, {
	mode: "production",
	output: {
		filename: '[name].bundle.js',
		path: modulePath.resolve(__dirname, `${publicDir}`)
	}
});


module.exports = productionConfig;