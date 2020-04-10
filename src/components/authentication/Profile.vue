<template>
    <div>
          <h1 class="title" style="text-align:center">User profile</h1>
    <div class="card">
       
      <img src="https://cdn.impactinit.com/cdn/x/x@02e0b6298d/smss53/smsimg28//pv/ingimagecontributors/ing_47185_02297.jpg" style="width:50% height:50%" />
      <div class="sud">
        <h2>Welcome to Your profile page!</h2>
        <br>
        <h2>Username:</h2>
        <h2>{{user.username}}</h2>
         <br>
        <h2>E-mail:</h2>
        <h2>{{user.email}}</h2>      
      </div>
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
.title {
    text-align: center;
    margin-left: 40%;
}
.card {
    display: flex;
    flex-wrap: wrap;
    margin-left: 35em;
    margin-right: 35em;
    margin-top: 2em;
}
h1,h2 {
    text-align: center;
    width: 10em;

}
.sud {
    margin-top: 10em;
}
</style>
