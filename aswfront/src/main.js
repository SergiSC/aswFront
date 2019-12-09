import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import router from "./router";

Vue.config.productionTip = true
Vue.use(BootstrapVue)
require("../style.css")

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
