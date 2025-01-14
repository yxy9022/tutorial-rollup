<template>
  <div class="my-component">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "MyComponent",
  components: {
    HelloWorld,
  },
};
</script>