/*
 * @Author: weicong
 * @Date: 2021-03-10 16:12:31
 * @LastEditTime: 2021-03-10 17:36:49
 * @LastEditors: weicong
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/style/index.scss";
import "@/register";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
