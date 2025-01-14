# tutorial-rollup

> rollup
> 官网：https://rollupjs.org/  
> 中文文档：https://www.rollupjs.com/  
> github: https://github.com/rollup/rollup

### rollup01

- 使用命令行方式打包生成 iife、cjs、umd、esm 四种格式。
- rollup 支持 amd, cjs, es, iife, umd, system 六种格式打包。
- 对于输出格式为 iife / umd 的 bundle 来说，若想要使用全局变量名来表示你的 bundle 时，需要配 name 属性。
  这样同一页面上的其他脚本可以使用这个变量名来访问你的 bundle 输出。

### rollup02

- 使用配置文件的方式打包
- 各种配置选项说明参考：https://cn.rollupjs.org/configuration-options/
- rollup -c 如果不指定具体配置文件，默认会去找 rollup.config.js 文件进行打包

### rollup03

- 允许 Rollup 从 JSON 文件导入数据
- 安装依赖包

```shell
npm install @rollup/plugin-json -D
```

- 在 rollup.config.js 中增加插件 @rollup/plugin-json 相关配置

### rollup04

- 把最新的 js 语法转为 es5
- 安装依赖包

```shell
# babel核心组件
npm install @babel/cli @babel/core @babel/preset-env -D

# rollup babel处理插件
npm install @rollup/plugin-babel -D
```

- 在 rollup.config.js 中增加插件 @rollup/plugin-babel 相关配置

### rollup05

- 配置 node_modules 中的第三方模块为外部依赖（ 第三方模块内容不会出现在最终生成的打包文件中 ）
- 安装依赖包

```shell
# demo测试使用三方依赖
npm install querystringify
```

- rollup 通过 `external` + `output.globals`来标记外部依赖

### rollup06

- 允许 rollup 加载 node_modules 中的第三方模块（ 第三方模块内容会出现在最终生成的打包文件中 ）
- 安装依赖包

```shell
# demo测试使用三方依赖
npm install querystringify

# rollup插件
npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs -D
```

- 在 rollup.config.js 中增加插件 @rollup/plugin-node-resolve @rollup/plugin-commonjs 相关配置
- 因为依赖要打包到库文件中，所以不用配置`external` + `output.globals

### rollup07

- 对代码进行压缩
- 安装依赖包

```shell
# rollup插件
npm install @rollup/plugin-terser -D
```

- 在 rollup.config.js 中增加插件 @rollup/plugin-terser 相关配置

### rollup08

- 打包 vue2 组件。 vue 不打包到库文件中。
- 安装依赖

```shell
npm install vue@2

npm install rollup-plugin-vue vue-template-compiler@2 -D
```
