import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';
import VueAxios from 'vue-axios'
import router from "./router";

Vue.config.productionTip = true
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  providers: {
    google: {
      name: 'google',
      url: 'https://aswfront.firebaseio.com',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: 'http://localhost:8080/home',
      clientId: '587974696907-guct3qjr505r1ok69vsukgttki815asq.apps.googleusercontent.com',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 452, height: 633 }
    },
  }
})
require("../style.css")

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
