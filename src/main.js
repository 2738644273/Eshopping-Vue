// 兼容 IE
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	baseUrl
} from '@/config'
Vue.prototype.$baseUrl=baseUrl
import {
	Toast
} from 'vant';
Vue.prototype.$toast=Toast

// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
// filters
import './filters'
Vue.config.productionTip = false
// 按需引入UI库 vant
import '@/plugins/vant'
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
