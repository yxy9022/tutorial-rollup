// 允许 Rollup 从 JSON 文件导入数据
import json from '@rollup/plugin-json';
// 把最新的js语法转为es5
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  external: ['querystringify'],
  output: [
    {
      file: 'dist/bundle.browser.js',
      format: 'iife',
      // 【可选配置】If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
      name: "UtilLib",
      globals: {
        // qs表示全局挂载的名称（global.qs）
        querystringify: 'qs'
      }
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      // umd 格式必须指定 name，否则报错
      name: "UtilLib",
      globals: {
        // qs表示全局挂载的名称（global.qs）
        querystringify: 'qs'
      },
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    json(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
};