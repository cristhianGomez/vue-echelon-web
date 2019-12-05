<template>
    <v-app-bar  app clipped-left color="#1976D2" dark>
    
      

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
        </template>
      </v-menu>
    </v-app-bar>
</template>



<script>
export default {
        name:"Header",
        data(){
            return {
                drawer:true
            }
        },
        computed:{
          habilitado(){
            return this.$store.getters.isLoggedIn;
          }
        },
        methods:{
            menuState(){
              this.$store.commit('setMenu');
            },
            cerrarSesion(){
              this.$store.commit("logout");
              this.$router.push("/login");
            }
        }
}
</script>