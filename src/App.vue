<template>
  <div id="app" 
    class="container" 
    v-bind:class="{
      day: this.$store.state.isDaytime, 
      night: !this.$store.state.isDaytime}">
    <Sky />
    <Building />
  </div>
</template>

<script>
import Sky from './components/Sky.vue'
import Building from './components/Building.vue'
import {store} from './store.js';

export default {
  name: 'App',
  components: {
    Sky,
    Building
  },
  computed: {
      isDaytime() {
          return store.state.isDaytime;
      }
  }
}
</script>

<style>
.container {
  padding-top: 10em;
  min-height: 100vh;
}
.night {
  background-color: midnightblue;
}
</style>
