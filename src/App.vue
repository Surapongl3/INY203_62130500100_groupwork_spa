<template>
  <navi></navi>
  <router-view/>
</template>

<script>
 import navi from "./components/navi.vue"
 export default {
   components: { navi }
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-size:25px;
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: yellow;
}
</style>
