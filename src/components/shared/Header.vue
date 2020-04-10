<template>
<div class="header">
  <nav>
 
       <router-link to="/home">Home</router-link>
      <router-link v-if="isLogged" to="/profile">MyProfile</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="!isLogged" to="/login">Login</router-link>
      <router-link v-if="!isLogged" to="/register">Register</router-link>
      <router-link v-if="isLogged" to="/create">Create</router-link>
      <a class="nav-link" v-if="isLogged" href="/login" @click.prevent="logout">Logout</a>

    </nav>


</div>
</template>

<script>
import router from '../../router/router';
export default {
    name: 'Header',
 
    computed: {
   
   user() {
      return this.$store.getters.user;
    },
    isLogged() {
      return !!this.$store.getters.user;
    },

  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      // localStorage.removeItem('user-token')
      // localStorage.clear();
      router.push("/about");
      console.log('im logged outtt')
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    padding-top: 3em;
    padding-bottom: 3em;
    height: 7em;
    margin-bottom: 4em;
    background-color: darkcyan;
  }
  #app > div.header > nav > a.router-link-exact-active.router-link-active {
    color:hotpink;
  }
  #app > div.header > nav > a {
    margin: 1em;
    text-decoration: none;
    font-weight: 500;
    height: 2em;
    color: whitesmoke;
  }
</style>
