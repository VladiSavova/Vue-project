// tuk importvame vuex i  vsichki failove ot store kydeto shte ima vuex neshta
//kato post.js i authentication.js  naprimer 
//authentication- for login logout register profile ? 
//post.js- for create, all , detail, edit, delete  etc
import Vue from 'vue';
import Vuex from 'vuex';
import post from './models/post';
import user from './models/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth:Auth,
    products,
  }
});

