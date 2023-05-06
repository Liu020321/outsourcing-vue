// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由插件
import router from './router'
import jQuery from 'jquery'
// window.$ = $
// window.jQuery = $

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注册路由
  jQuery,
  components: { App },
  template: '<App/>'
})
