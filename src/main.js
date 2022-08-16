import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// 引入vant
import Vant, {Toast} from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//多语言
import i18n from './lang/i18n';

// 引入amfe-flexible
import 'amfe-flexible/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
