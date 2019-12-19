import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios';
import VueAxios from 'vue-axios'
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = true
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
require("../style.css")

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
