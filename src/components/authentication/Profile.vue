<template>
    <div>
    <div class="card">
         <h2 style="text-align:center">User profile</h2>
      <img src="https://cdn.impactinit.com/cdn/x/x@02e0b6298d/smss53/smsimg28//pv/ingimagecontributors/ing_47185_02297.jpg" style="width:50% height=50%" />
      <h1>Welcome to Your profile page,</h1>
      <h1>E-mail: {{user.email}}</h1>
      <h1>Username:  {{user.username}}</h1>
    </div>
    </div>
</template>
<script >
export default {
    computed: {
        user() {
      return this.$store.getters.user;
    },
    },
    
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
    width: 10em;

}
</style>
