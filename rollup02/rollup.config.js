export default {
  input: 'src/main.js',
  output: [{
    file: 'dist/bundle.browser.js',
    format: 'iife',
    name: "myBundle"
  }, {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: "myBundle"
  }, {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
  }, {
    file: 'dist/bundle.esm.js',
    format: 'esm'
  },
  ]
};