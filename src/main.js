// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Calendar from 'vue2-datepick'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex);
Vue.use(ElementUI);//使用element-ui框架
Vue.use(Calendar);//日历插件
Vue.config.productionTip = false

/* eslint-disable no-new */
// 引入mock.js
require('./mock.js')
//require('../axios/api.js')
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  create(){
  	if(localStorage.getItem("checkStatue")=== null){
  		localStorage.setItem("checkStatue",'');
  	}else{
  		this.$store.state.checkStatue = localStorage.getItem('checkStatue');
  	}
  	if(localStorage.getItem("userLogin")=== null){
  		localStorage.setItem("userLogin",'');
  	}
  	this.$store.state.name = localStorage.getItem('userLogin');
  },
  template: '<App/>'
})

Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})//时间整理过滤器