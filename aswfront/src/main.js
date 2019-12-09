import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
require("../style.css")

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
