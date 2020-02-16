<template>
    <p class="orders">
        <strong>Cookie's Ordered Today: {{cookiesOrdered}}</strong>
    </p>
</template>

<script>
import {store} from '../store.js';

export default {
    computed: {
        isDaytime() {
            return store.state.isDaytime;
        },
        cookiesOrdered() {
            return this.$store.state.orderCount;
        }
    }
}
</script>

<style scoped>
.orders {
    color: #274e13;
    text-align: center;
    padding: 1em;
}

</style>