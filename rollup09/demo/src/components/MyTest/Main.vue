<template>
  <div>
    <h3>复合组件测试</h3>
    <PcTest></PcTest>
  </div>
</template>
<script>
import { PcTest } from "tree-shaking-fun";

export default {
  name: "MyTest",
  components: {
    PcTest,
  },
};
</script>
