import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bearerToken: null
  },
  mutations: {
    SET_BEARER_TOKEN(state, token) {
      state.bearerToken = token;
    }
  },
  actions: {
    setBearerToken: ({ commit }, token) => {
      commit('SET_BEARER_TOKEN', token);
    }
  },
  modules: {},
  getters: {
    bearerToken: state => {
      return state.bearerToken;
    }
  }
})
