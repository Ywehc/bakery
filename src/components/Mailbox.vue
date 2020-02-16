<template>
    <div :class="{'broken': broken, 'mailbox': !broken }" 
        @click="fall()">
        <div class="mailslot"></div>
        <p>Mailbox</p>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            broken: false
        }
    },
    methods: {
        fall() {
            this.broken = true;
        }
    }
}

</script>

<style scoped>
.mailbox, .broken {
    height: 50px;
    width: 70px;
    background: #999999;
    margin-left: 13px;
    padding-top: 10px;
}
.mailbox {
    margin-top: 26px;
    
}
.mailbox p, .broken p {
    color: #666666;
    font-size: 75%;
    text-align: center;
    font-weight: bold;
}
.mailslot {
    background: #666666;
    height: 8px;
    width: 50px;
    margin: auto;
}
.broken {
    margin-top: 70px;
}
</style>