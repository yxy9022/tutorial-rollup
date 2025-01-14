// 允许 Rollup 从 JSON 文件导入数据
import json from '@rollup/plugin-json';

//  
export default {
  input: 'src/main.js',
  output: [{
    file: 'dist/bundle.browser.js',
    format: 'iife',
    // https://cn.rollupjs.org/configuration-options/#output-name
    // 【可选配置】If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
    name: "UtilLib"
  }, {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
  }, {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    // umd 格式必须指定 name，否则报错
    name: "UtilLib"
  }, {
    file: 'dist/bundle.esm.js',
    format: 'esm'
  }
  ],
  plugins: [
    json()
  ]
};