import Vue from 'vue';
import App from './App.vue';
import XXUI from './../packages/loacl';
import './../themes/index.scss';

Vue.use(XXUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
