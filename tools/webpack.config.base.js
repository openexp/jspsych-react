module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  output: {
    libraryTarget: 'umd',
    library: 'experiment',
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
