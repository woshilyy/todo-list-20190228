// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import Mint from 'mint-ui';
import 'vant/lib/index.css';
import echarts from 'echarts'
import axios from 'axios'

Vue.use(Vant);
Vue.use(Mint);

Vue.prototype.$echarts = echarts
Vue.prototype.$axios=axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
