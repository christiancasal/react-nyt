module.exports = {

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },
  watch: true,


  // This will be what we do
  module: {
    loaders: [
      {
        // test: /\.jsx?$/, 
        test: /.*/, loader: 'node',
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using.
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
