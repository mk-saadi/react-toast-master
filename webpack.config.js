const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "production",
	entry: "./src/ToastProvider.jsx",
	output: {
		path: path.resolve("build"),
		filename: "index.js",
		libraryTarget: "commonjs2",
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src/components/functions"),
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/footer"),
		},
	},
	externals: {
		react: "react",
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
		}),
	],
};
