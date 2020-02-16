<template class="sky">
    <div v-bind:class="{
        sun: this.$store.state.isDaytime, 
        moon: !this.$store.state.isDaytime }" 
    @click="toggleTime">
    </div>
</template>

<script>
import {store} from '../store.js';

export default {
    methods: {
        toggleTime() {
            this.$store.commit('toggleDay');
        }
    },
    computed: {
        isDaytime() {
            return store.state.isDaytime;
        }
    }
}
</script>

<style scoped>
.sun, .moon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-left: 630px;
}
.sun:hover, .moon:hover {
    cursor: pointer;
}
.sun {
    background: #ffff00;
}
.moon {
    border-radius: 50%;
    box-shadow: inset 16px 0px white, inset 16px 0px 1px 2px white;
    -moz-box-shadow: inset 16px 0px white, inset 16px 0px 1px 2px white;
}
@media screen and (max-width: 1200px) {
  .sun, .moon {
      margin-left: 540px;
  }
}
@media screen and (max-width: 996px) {
  .sun, .moon {
      margin-left: 400px;
  }
}
@media screen and (max-width: 768px) {
  .sun, .moon {
      margin-left: 320px;
  }
}
@media screen and (max-width: 556px) {
  .sun, .moon {
      margin-left: 250px;
  }
}
</style>

