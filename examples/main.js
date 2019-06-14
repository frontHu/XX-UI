import Vue from 'vue'
import App from './App.vue'
import XxUi from './../packages/loacl'

Vue.use(XxUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
