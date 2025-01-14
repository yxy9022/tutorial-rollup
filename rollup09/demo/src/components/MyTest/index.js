import MyTest from "./Main.vue";

MyTest.install = function (Vue) {
  Vue.component(MyTest.name, MyTest);
};

export default MyTest;
