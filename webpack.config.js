const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    libraryTarget: "umd",
    library: "jspsychReact",
    path: path.resolve(__dirname, "dist"),
    filename: "jspsych-react.js"
  }
};
