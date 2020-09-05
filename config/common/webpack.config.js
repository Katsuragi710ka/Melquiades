const modulePath = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryDir = '../../src';
const outDir = '../../dist';

const commonConfig = {
	entry: modulePath.resolve(__dirname, `${entryDir}/index.tsx`),
	plugins: [new HtmlWebpackPlugin({ template: modulePath.resolve(__dirname, `${entryDir}/index.html`) })],
	node: { fs: "empty" },
	target: "web",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
				exclude: /node_modules/,
				use: [{ loader: "ts-loader" }]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: { javascriptEnabled: true }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|mp4)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'],
		alias: {
			'@app': modulePath.resolve(__dirname, `${entryDir}`),
			'@appAsset': modulePath.resolve(__dirname, `${entryDir}/asset`),
			'@appComponent': modulePath.resolve(__dirname, `${entryDir}/component`),
			'@appLayout': modulePath.resolve(__dirname, `${entryDir}/layout`),
			'@appRoute': modulePath.resolve(__dirname, `${entryDir}/route`),
			'@appStore': modulePath.resolve(__dirname, `${entryDir}/store`),
			'@appAction': modulePath.resolve(__dirname, `${entryDir}/store/action`),
			'@appReducer': modulePath.resolve(__dirname, `${entryDir}/store/reducer`),
			'@appSaga': modulePath.resolve(__dirname, `${entryDir}/store/saga`),
			'@appUtil': modulePath.resolve(__dirname, `${entryDir}/util`)
		}
	},
	output: { publicPath: '/' }
};

module.exports = commonConfig;