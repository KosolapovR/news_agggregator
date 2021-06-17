import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import storeConfig from "@/store";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
