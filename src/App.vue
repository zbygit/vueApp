<template>
  <div id="app">

    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from './publiccomponent/bottomNav'
export default {
  name: 'App',
  components:{
    bottom
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
