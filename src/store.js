import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDaytime: true,
        orderCount: 0
    },
    mutations: {
        toggleDay(state) {
            state.isDaytime = !state.isDaytime
        },
        orderCookie(state) {
            state.orderCount++
        },
        resetOrders(state) {
            state.orderCount = 0
        }
    }
})