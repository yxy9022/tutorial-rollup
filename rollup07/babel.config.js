export default {
  "presets":
    [
      "@babel/preset-env",
      {
        // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        "modules": false,
        "useBuiltIns": "entry",
        // browserslist环境不支持的所有垫片都导入
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
        "corejs": {
          "version": 3,  // 使用core-js@3
          "proposals": true
        },
      },
    ],
}
