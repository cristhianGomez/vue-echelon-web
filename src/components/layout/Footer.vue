<template>
  
  <v-footer app  class="padd" dark >
    <v-spacer></v-spacer>
    <div class="d-flex align-center justify-center  outlined footerstyles">Copyright &copy; Todos los Derechos Reservados - {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
  .padd{
     padding: 0 0 0 0;
  }
    .footerstyles{
        background-color: #1976D2;
        width:100%;
    }
</style>