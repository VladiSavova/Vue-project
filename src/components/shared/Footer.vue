<template>
 <div class="footer">
    <v-card height="200">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
 </div>
</template>

<script>
export default {
    name: 'Footer',
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app > div.footer > div > footer{

    background-color: darkcyan;
}
</style>
