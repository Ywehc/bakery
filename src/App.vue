<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Sky />
    <Building />
  </div>
</template>

<script>
import Sky from './components/Sky.vue'
import Building from './components/Building.vue'

export default {
  name: 'App',
  components: {
    Sky,
    Building
  }
}
</script>

<style>
</style>
