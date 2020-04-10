import Vue from 'vue';
import VueRouter from 'vue-router';

// import AuthGuard from './guards/auth-guard';
// import NoAuth from './guards/anonymous-guard';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Login from '@/components/authentication/Login.vue';
import Register from '@/components/authentication/Register.vue';
import Create from '@/components/Create.vue';
import Profile from '@/components/authentication/Profile.vue';

const routes =  [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login},
    { path: '/register', component: Register },
    { path: '/create', component: Create },
    { path: '/profile', component: Profile }
]   


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});