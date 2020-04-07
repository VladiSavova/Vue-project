<template>
 <div class="footer">
    <v-card height="140">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>SoftUni VueJs project</strong>
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
    color: blanchedalmond;
    background-color: darkcyan;
}
.v-col {
  width: 100%;
  margin: 50px 0 0 0;
  padding: 20px 0;
  bottom: 0;
  position: fixed;
  text-align: center;
  color: white;
}
</style>
