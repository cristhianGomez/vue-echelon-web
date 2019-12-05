import Vue from 'vue'
import Vuex from 'vuex'
 import axios from 'axios'

Vue.use(Vuex)


const url_modules= {
  "login-image": process.env.VUE_APP_DOMINIO + "/party-drivers/login-image",
  "appbar-image": process.env.VUE_APP_DOMINIO + "/party-drivers/appbar-image",
  "enterprise-name": process.env.VUE_APP_ENTERPRISE_NAME
};
export default new Vuex.Store({
  
  
  state: {
  menu: false,
    enterprise_data:''
  },
  getters: {
    getEnterprise(state){
      return state.enterprise_data;
    }
  },
  actions: {
    getEnterpriseData(){
      axios.all([
        axios.get(url_modules["login-image"]),
        axios.get(url_modules["appbar-image"]),
      ]).then(axios.spread(function(){
              }.bind(this))).catch(e=>{
          this.$store.commit('setErrors',e);
      });
    }
  },
  modules: {
  }
})
