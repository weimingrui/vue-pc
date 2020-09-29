/*
 * @Author: Arthur
 * @Date: 2020-09-29 15:53:56
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-29 16:40:06
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router';

import Antd from 'ant-design-vue';
import { message } from 'ant-design-vue';

// import '@/assets/style/mixin.scss'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);

// message 单独使用
Vue.prototype.$message = message;

Vue.use(VueRouter);

let router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
