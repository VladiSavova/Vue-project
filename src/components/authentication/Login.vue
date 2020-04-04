<template>
<div>
    Login view
    <button @click="login">Login</button>
</div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        login() {
            //login using fetch/axios etc.
            this.$router.push('home')
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
