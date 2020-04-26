import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bearerToken: null,
    betResponse: null
  },
  mutations: {
    SET_BEARER_TOKEN(state, token) {
      state.bearerToken = token;
    },
    SET_BET_RESPONSE(state, response) {
      state.betResponse = response;
    }
  },
  actions: {
    setBearerToken: ({ commit }, token) => {
      commit('SET_BEARER_TOKEN', token);
    },
    setBetResponse: ({ commit }, response) => {
      commit('SET_BET_RESPONSE', response);
    }
  },
  modules: {},
  getters: {
    bearerToken: state => {
      return state.bearerToken;
    },
    betResponse: state => {
      return state.betResponse;
    }
  }
})
