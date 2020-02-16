<template>
    <div class="door" @click="orderCookie">
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
        }
    }
}
</script>

<style scoped>
.door {
    background: #f6b26b;
    height: 160px;
    margin-top: 40px;
    padding-top: 80px;
}
.door:hover {
    cursor: pointer;
}
.handle {
    height: 4px;
    width: 24px;
    background: #b45f06;
    margin-left: -6px;
}
</style>