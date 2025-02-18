import VuePlugin from 'rollup-plugin-vue';
// 把最新的js语法转为es5
import { babel } from '@rollup/plugin-babel';
// 允许rollup 加载node_modules 中的第三方模块
import { nodeResolve } from '@rollup/plugin-node-resolve';
// 将 CommonJS 语法模块转换为 ES6 供rollup处理
import commonjs from '@rollup/plugin-commonjs';
// 对代码进行压缩
import terser from '@rollup/plugin-terser';

export default {
  input: './index.js',
  external: ['vue'], // 排除vue
  output: [
    {
      file: 'dist/tree-shaking-fun.js',
      format: 'umd',
      // umd 格式必须指定 name，否则报错
      name: 'TreeShakingTest',
      // https://cn.rollupjs.org/configuration-options/#output-globals
      globals: {
        vue: 'Vue'
      },
      // 指定导出模式(自动、默认、命名、无)为命名
      exports: 'named',
      sourcemap: false
    },
    {
      file: 'dist/tree-shaking-fun.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: false
    }
  ],
  plugins: [
    VuePlugin(),
    nodeResolve({
      extensions: ['.js', '.vue'],
      mainFields: ['module', 'main', 'browser']
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
    // terser({
    //   mangle: {
    //     toplevel: true
    //   }
    // })
  ]
};
