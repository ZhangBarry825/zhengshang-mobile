import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navigation from './components/navigation/navigation.vue'

Vue.component('navigation', navigation);

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import 'postcss-pxtorem'
import 'lib-flexible'

import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

Vue.prototype.$dia = ()=>{
  var form = document.createElement('form');
  form.action = 'https://live02.wasnnznyy.com/chat/chat/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn';
  form.target = '_blank';
  form.method = 'POST';
  document.body.appendChild(form);
  form.submit();
};

import {animateFun} from './utils/common.js';
Vue.prototype.$ami = animateFun;

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'b0nN1SLy6xKgqtT07XkAgVGMVMdqaUyZ'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
