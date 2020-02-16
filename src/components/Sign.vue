<template>
    <div :class="{
          signDay: this.$store.state.isDaytime, 
          signNight: !this.$store.state.isDaytime}">
        <p><strong>COOKIE BAKERY</strong></p>
    </div>  
</template>
<script>
import {store} from '../store.js';

export default {
  computed: {
      isDaytime() {
          return store.state.isDaytime;
      }
  }
}
</script>

<style scoped>
.signDay, .signNight {
    text-align: center;
    border-radius: 2px;
    width: 160px;
    position: absolute;
    margin-left: 25%;
    margin-top: -25px;
    padding: 4px;
    height: 40px;
}
.signDay {
    background: #93c47d;
    color: #274e13;
    border: 4px solid #7ca254;
}
.signNight {
    background: #516946;
    color: #101f08;
    border: 4px solid #355527;
}
</style>