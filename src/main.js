/*
 * @Author: weicong
 * @Date: 2021-03-10 16:12:31
 * @LastEditTime: 2021-03-22 16:05:08
 * @LastEditors: weicong
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/register";
import "@/svg";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
