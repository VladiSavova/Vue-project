<template>
<div class="header">
  <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/create">Create</router-link>
    </nav>


</div>
</template>

<script>
export default {
    name: 'Header',
 
}

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
