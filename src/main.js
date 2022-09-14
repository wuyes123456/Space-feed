import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入amfe-flexible
import 'amfe-flexible/index'
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)

//多语言
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: (function() {
    if (localStorage.getItem('lang')) {
      return localStorage.getItem('lang')
    }
    return 'zh'
  }()),
  messages: {
    'en': require('./lang/en_US'), //英文语言包
    'zh': require('./lang/zh_CN.js'), //中文繁体包
  }
})

import DApp from './Dapp/index';
Vue.prototype.$DApp = DApp;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
