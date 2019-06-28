<template>
    <v-toolbar app flat height="auto">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-regular" ><router-link to="/">Coffee Blog</router-link></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/signIn" color="primary">Sign In</v-btn>
    </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* router-link's attribute */
a {
  text-decoration: none;
  color: black;
}
</style>
