<template>
<v-app>
<Header/>
  <v-content>
        <!-- <Breadcumb/> -->
        <v-card class="bgs d-flex outlined
    tile" height="100%">
       <transition
				>
				<router-view>
          
        </router-view>
			</transition>
        </v-card>
  </v-content>
    <Footer/>
</v-app>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

  .bgs{
      /* background-image: url('assets/bg.png'); */
      background-size: cover;
  }

htm,
body {
	height: calc(100%-50px);
}
.page {
	position: fixed;
	width: inherit;
}
</style>
