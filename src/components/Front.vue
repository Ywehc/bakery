<template>
<div :class="{
      frontDay: this.$store.state.isDaytime, 
      frontNight: !this.$store.state.isDaytime}">
    <Sign />
    <div class="row">
        <div class="col-4 front-left">
            <Window />
        </div>
        <div class="col-4 door">
            <Door />
        </div>
        <div class="col-4 front-right">
            <Window />
            <Mailbox />
        </div>
    </div>
</div>
    
</template>

<script>
import {store} from '../store.js';

import Window from './Window.vue'
import Sign from './Sign.vue'
import Door from './Door.vue'
import Mailbox from './Mailbox.vue'

export default {
    components: {
    Window,
    Sign,
    Door,
    Mailbox
  },
  computed: {
    isDaytime() {
        return store.state.isDaytime;
    }
}
}
</script>

<style scoped>
.frontDay, .frontNight {
    width: 320px;
    margin: auto;
    height: 200px;
    position: relative;
}
.frontDay {
    background: #cccccc;
}
.frontNight {
    background: #565454;
}
.front-left {
    padding-right: 0;
}
.front-right {
    padding-left: 0;
}
.door {
    padding-left: 12px;
    padding-right: 12px;
}
</style>