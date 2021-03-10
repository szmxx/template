/*
 * @Author: weicong
 * @Date: 2021-03-10 17:33:11
 * @LastEditTime: 2021-03-10 17:43:37
 * @LastEditors: weicong
 * @Description:
 */

import Vue from "vue";
const files = require.context(".", true, /\.vue$/);
files.keys().map((i) => {
  const name = i.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
  if (/^Dist/.test(name)) {
    const config = files(i);
    Vue.component(name, config.default || config);
  }
});
