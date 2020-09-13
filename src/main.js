import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.keyCodes.f1 = 65 //按键a

new Vue({
  render: h => h(App)
}).$mount('#app')
