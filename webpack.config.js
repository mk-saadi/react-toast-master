const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/Toast.jsx",
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
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve("src/components/footer"),
		},
	},
	externals: {
		react: "react",
	},
};
