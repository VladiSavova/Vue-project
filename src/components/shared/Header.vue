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
    padding-top: 2em;
    height: 6em;
    background-color: darkcyan;
  }
</style>
