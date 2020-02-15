<template>
    <div class="building-container">
        <div class="roof">
        </div>
        <Front />
    </div>  
</template>

<script>
import Front from './Front.vue'

export default {
  components: {
    Front
  }
}
</script>

<style scoped>
.roof {
    width: 0; 
    height: 0; 
    border-left: 160px solid transparent;
    border-right: 160px solid transparent;
    border-bottom: 160px solid #dd7e6b;
    margin: auto;
}
</style>