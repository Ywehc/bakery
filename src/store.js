import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDaytime: true
    },
    mutations: {
        toggleDay(state) {
            state.isDaytime = !state.isDaytime
        }
    }
})