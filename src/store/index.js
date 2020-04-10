import Vue from 'vue';
import Vuex from 'vuex';
import post from './models/post';
import Auth from './models/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth: Auth,
    post,
  }
});

