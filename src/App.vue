<template>
  <div id="app">
    <router-view />
    <slot name="botom"></slot>
    </div>
</template>

<script>

import { setGlobalRem } from "../src/assets/js/public"
export default {
  name: "App",
   created() {
    this.setGlobalRemS();
  },
  methods: {
    setGlobalRemS() {
      setGlobalRem();
    }
  }
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
 font-size: 1.6rem;
}
</style>
