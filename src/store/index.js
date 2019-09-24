import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        apiURL: "https://me-api.liiinder.me"
    },

    mutations: { // syncronus
        setToken(state, token) {
            state.token = token;
        }
    },

    actions: { // asyncronous
        setToken(state, token) {
            state.commit("setToken", token);
        }
    },

    getters: {
        getToken(state) {
            return state.token;
        },
        apiURL(state) {
            return state.apiURL;
        }
    },
});