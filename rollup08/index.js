import MyComponent from "./src/MyComponent.vue";

const install = function (Vue, opts = {}) {
  Vue.component(MyComponent.name, MyComponent);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default MyComponent;
