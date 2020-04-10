<template>
  <div id="regForm" class="wrapper">
    <h1> Register </h1>
    <form @submit.prevent="register">

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="$v.email.$model"   @blur="$v.email.$touch" required/>
        <template v-if="$v.email.$error">
          <p class="alert" v-if="!$v.email.required">The email is required</p>
          <p class="alert" v-else-if="!$v.email.email">Not valid email</p>
        </template>
      </div>
    
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" type="text" v-model="$v.username.$model"  @blur="$v.username.$touch" required />
        <template v-if="$v.username.$error">
          <p class="alert" v-if="!$v.username.required">The username is required</p>
          <p class="alert" v-else-if="!$v.username.minLength">The username must be min 3 chars</p>
        </template>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="$v.password.$model" @blur="$v.password.$touch" required/>
        <template v-if="$v.password.$error">
          <p class="alert" v-if="!$v.password.required">The password is required</p>
          <p class="alert" v-else-if="!$v.password.minLength">Password must be minimum 6 symbols</p>
          <p class="alert" v-else-if="!$v.password.maxLength">Password must be maximum 16 symbols</p>
        </template>
      </div>

      <button :disabled="$v.$invalid">Register</button>
    </form>
    <p>
      <router-link to="/login">You have account? Login now</router-link>
    </p>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {  required, minLength, maxLength, email} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      email: "",
      password: "",
     
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    },
    
  },
 computed: {
    user() {
      return this.$store.getters.user;
    },

  },
  
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },

  methods: {
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>

#regForm {
  width: 50%;
  margin-top: 30px;
  background-color: white;
  padding: 30px;
  margin-left: 25%;
}
input {
  width: 100%;
  padding: 7px 0;
  margin: 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid cadetblue;
}
input[type="radio"] {
  width: auto;
  margin: 0 10px;
  display: inline-block;
}
textarea {
  width: 100%;
  height: 200px;
  padding: 7px 0;
  margin: 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid cadetblue;
}

label {
  display: inline-block;
  font-size: 18px;
  color:cadetblue;
  cursor: pointer;
}
button {
  width: 30%;
  margin: 10px 0;
  padding: 10px 40px;
  border: 2px solid dodgerblue;
  display: inline-block;
  background-color:darkcyan ;
  color:lavender;
  font-size: 20px;
  /* cursor: pointer; */
}
button:disabled {
  border: none;
  background-color:darkcyan ;
  color:lavender;

}
.alert {
  color: red;
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 1em;
  margin-top: 0.6em;
}
.form-group {
  margin: 20px 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
h1 {
  text-align: center;
}
</style>