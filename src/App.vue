<template>
  <v-app>
    <v-content class="background-img">
      <!-- header -->
      <TopBar />

      <!-- page content -->
      <router-view></router-view>

      <!-- footer -->
    </v-content>
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar'
import Index from '@/views/Index'

export default {
  name: 'App',
  components: {
    TopBar,
    Index
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.background-img {
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover; 
}
</style>
