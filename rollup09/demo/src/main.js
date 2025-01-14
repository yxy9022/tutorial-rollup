import Vue from "vue";
import App from "./App.vue";
import MyTest from "./components/MyTest";

Vue.use(MyTest);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
