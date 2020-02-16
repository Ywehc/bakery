<template>
    <div class="building-container">
        <div :class="{
          roofDay: this.$store.state.isDaytime, 
          roofNight: !this.$store.state.isDaytime}">
        </div>
        <Front />
    </div>  
</template>

<script>
import {store} from '../store.js';
import Front from './Front.vue'

export default {
  components: {
    Front
  },
  computed: {
      isDaytime() {
          return store.state.isDaytime;
      }
  }
}
</script>

<style scoped>
.roofDay, .roofNight {
    width: 0; 
    height: 0; 
    border-left: 160px solid transparent;
    border-right: 160px solid transparent;
    margin: auto;
}
.roofDay {
    border-bottom: 160px solid #dd7e6b;
}
.roofNight {
    border-bottom: 160px solid #6a3b31;
}
</style>