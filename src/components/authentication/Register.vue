<template>
<div>
        <h1>Register</h1>
    <form @submit.prevent="submitHandler">
       <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="username" @blur="$v.username.$touch" />
      <template v-if="$v.username.$error">
        <div v-if="!$v.username.required">Username is required!</div>
        <div v-if="!$v.username.minLength">Username should be more than 3 symboils!</div>
      </template>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" @blur="$v.password.$touch" />
      <template v-if="$v.password.$error">
        <div v-if="!$v.password.required">Password is required!</div>
        <div v-if="!$v.password.minLength">Password should be more than 8 symboils!</div>
      </template>
    </div>
    <button>register</button>
    </form>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    name: 'Register',
    data() {
        return{
            username: '',
            password: '',
        }
    },
    validations: {
        username: {
            required,
            minLength: minLength(5)
        },
        password: {
            required,
            inLength: minLength(8)
        },
    },
    methods: {
        submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) { return; }
      console.log('Form was submitted!');
    },
    }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
