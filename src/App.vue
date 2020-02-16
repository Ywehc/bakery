<template>
  <div id="app" :class="{
      day: this.$store.state.isDaytime, 
      night: !this.$store.state.isDaytime}">
    <div class="container">
      <Sky />
      <Building />
      <Orders v-if="this.$store.state.isDaytime"/> 
    </div>   
  </div>
</template>

<script>
import Sky from './components/Sky.vue'
import Building from './components/Building.vue'
import Orders from './components/Orders.vue'
import {store} from './store.js'

export default {
  name: 'App',
  components: {
    Sky,
    Building,
    Orders
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
