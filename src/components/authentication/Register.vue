<template>
<div>
   <h1>Register</h1>
       <form class="user-form">
        <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/user.png" />
          <input type="text" name="username" placeholder=" Username" />
        </div>

        <div class="form-group">
          <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
          <input type="password" name="password" placeholder=" Password" />
        </div>

		<div class="form-group">
          <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
          <input type="password" name="rePassword" placeholder=" Repeat password" />
        </div>
        <button class="btn" @click="register()">Register</button>
      </form>
</div>
</template>

<script>
export default {
	name: 'Register',
	methods: {
        register() {
            //login using fetch/axios etc.
            this.$router.push('home')
        }
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .form-group{
	float: center;
	}
	input {
		width: 20em;
		height: 2em;
		box-sizing: border-box;
		border: 0.2px solid black;
		margin: 1em;
	}
	.btn {
		margin-left: 10em;
		margin-top: 3em;
		height: 3em;
		width: 7em;
		background-color:cadetblue;
	}
</style>