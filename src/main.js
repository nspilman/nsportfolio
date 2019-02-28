import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import routes from './routes.js';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})


Vue.use(VueRouter)

import './assets/css/font-awesome.min.css'
import './assets/css/ie8.css'
import './assets/css/ie9.css'
import './assets/css/main.css'
import './assets/css/bootstrap.min.css'
import './assets/css/noscript.css'

new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app");
