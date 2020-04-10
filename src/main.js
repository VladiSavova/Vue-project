import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import router from '@/router/router'; // path to router
import store from './store';
import axios from 'axios';

const API_URL = "http://localhost:8000";
// const API_URL = "http://localhost:9999/api";

axios.interceptors.request.use(
  function(config) {
    config.url = `${API_URL}/${config.url}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')