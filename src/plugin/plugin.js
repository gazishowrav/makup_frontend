import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ]
})
import 'v-toaster/dist/v-toaster.css'

import axios from 'axios'

const base = axios.create({
  baseURL: 'https://mwbddemo.com/admin/api/frontend/'
   // baseURL: 'http://192.168.12.100/makeup/api/frontend/'
});
base.defaults.timeout = 20000;
Vue.prototype.$http = base;

import '@/assets/scss/main.scss'

try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	 require('bootstrap')
	  }
	   catch (e)
	    { }

export default {}
