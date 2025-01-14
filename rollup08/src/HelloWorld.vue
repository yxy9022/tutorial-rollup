<template>
  <div class="hello-world">
    <h1>Hello World</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "This is a hello world component!",
    };
  },
};
</script>

<style scoped>
.hello-world {
  text-align: center;
}
</style>