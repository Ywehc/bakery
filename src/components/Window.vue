<template>
    <div v-bind:class="{
      day: this.$store.state.isDaytime, 
      night: !this.$store.state.isDaytime}">
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
.day, .night {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: auto;
    margin-top: 20px;
    border: 3px solid #9fc5e8;
}
.day {
    background-color: #cfe2f3; 
}
.day:hover {
    background-image: url('../assets/cookie.jpg');
    background-size: cover;
}
.night {
    background: grey; 
}
</style>