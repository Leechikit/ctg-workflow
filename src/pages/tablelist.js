import Vue from 'vue'
import App from './tablelist.vue'
import iView from 'iview';
import store from '../vuex/store';
import 'iview/dist/styles/iview.css';
import '../assets/iconfont/iconfont.css';
import '../assets/iconfont/iconfont.js'

Vue.use(iView);

document.title = '应用管理'

var app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})