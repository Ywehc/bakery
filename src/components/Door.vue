<template>
    <div :class="{
      doorDay: this.$store.state.isDaytime, 
      doorNight: !this.$store.state.isDaytime}" 
      @click="orderCookie">
        <div class="handle"></div>
    </div>
</template>

<script>
import {store} from '../store.js';

export default {
    methods: {
        orderCookie() {
            this.$store.commit('orderCookie');
        }
    },
    computed: {
        orderCount() {
            return store.state.orderCount
        },
        isDaytime() {
            return store.state.isDaytime;
        }
    }
}
</script>

<style scoped>
.doorDay, .doorNight {
    height: 160px;
    margin-top: 40px;
    padding-top: 80px;
}
.doorDay {
    background: #f6b26b;
}
.doorDay:hover {
    cursor: pointer;
}
.doorNight {
    background: #7d5e3d;
}
.handle {
    height: 4px;
    width: 24px;
    background: #b45f06;
    margin-left: -6px;
}
</style>