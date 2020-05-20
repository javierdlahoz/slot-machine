import Vue from 'vue'
import Vuex from 'vuex'
import Utils from '../services/utils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operatorToken: null,
    bearerToken: null,
    betResponse: null,
    game: null,
    balance: null,
    payouts: null
  },
  mutations: {
    SET_OPERATOR_TOKEN(state, token) {
      state.operatorToken = token;
    },
    SET_BEARER_TOKEN(state, token) {
      state.bearerToken = token;
    },
    SET_BET_RESPONSE(state, response) {
      state.betResponse = response;
    },
    SET_GAME(state, game) {
      state.game = game;
    },
    SET_BALANCE(state, balance) {
      state.balance = balance;
    },
    BET(state, bet) {
      state.balance -= bet;
    },
    SET_PAYOUTS(state, payouts) {
      if (payouts) {
        payouts.forEach((payout) => {
          payout.formattedMask = Utils.chunkForReels(payout.mask, state.game.options.cols, state.game.options.rows);
        });
      }
      state.payouts = payouts;
    }
  },
  actions: {
    setOperatorToken: ({ commit }, token) => {
      commit('SET_OPERATOR_TOKEN', token);
    },
    setBearerToken: ({ commit }, token) => {
      commit('SET_BEARER_TOKEN', token);
    },
    setBetResponse: ({ commit }, response) => {
      commit('SET_BET_RESPONSE', response);
    },
    setGame: ({ commit }, game) => {
      commit('SET_GAME', game);
    },
    setBalance: ({ commit }, balance) => {
      commit('SET_BALANCE', balance);
    },
    bet: ({ commit }, bet) => {
      commit('BET', bet);
    },
    setPayouts: ({ commit }, payouts) => {
      commit('SET_PAYOUTS', payouts);
    }
  },
  modules: {},
  getters: {
    operatorToken: state => {
      return state.operatorToken;
    },
    bearerToken: state => {
      return state.bearerToken;
    },
    betResponse: state => {
      return state.betResponse;
    },
    game: state => {
      return state.game;
    },
    balance: state => {
      return state.balance;
    },
    payouts: state => {
      return state.payouts;
    }
  }
})
