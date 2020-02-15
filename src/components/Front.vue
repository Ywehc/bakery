<template>
<div class="front">
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
  }
}
</script>

<style scoped>
.front {
    width: 320px;
    margin: auto;
    height: 200px;
    background: #cccccc;
    position: relative;
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