<script>
  import config from "../services/config";
  import EventBus from "../services/EventBus";
  import axios from "axios";
  import Vue from "vue";

  export default {
    data() {
      return {
        loading: false,
        choices: [],
        response: {},
        payline: []
      };
    },
    methods: {
      retrieveSpinData(params, callback, error) {
        EventBus.$emit('spinning', true);
        axios.post(this.spinEndpoint, params, {headers: this.playerHeaders})
          .then(({data}) => {
            this.response = data;
            this.choices = data.data.outcome;
            this.payline = data.data.payouts.payline ? data.data.payouts.payline : [];
            this.$store.dispatch('setBetResponse', data.data);
            this.$store.dispatch('setBalance', data.data.balance);
            callback(data);
          })
          .catch((data) => {
            EventBus.$emit('spinning', false);
            Vue.$toast.error('Something went wrong');
            error(data);
          });
      },
      retrieveSessionInfo(callback, error) {
        axios.get(`${config.baseUrl}/`, {headers: this.playerHeaders})
          .then(({data}) => {
            this.$store.dispatch('setGame', data.data.game);
            this.$store.dispatch('setBalance', data.data.balance);
            callback(data);
          }).catch(() => {
            Vue.$toast.error('Something went wrong');
            if (error) error();
          });
      }
    },
    computed: {
      spinEndpoint() {
        return `${config.baseUrl}/games/${config.gameId}/spin`;
      },
      config() {
        return {
          headers: this.headers
        };
      },
      headers() {
        return {
          'Authorization': `Bearer ${this.$store.getters.operatorToken ?? config.token}`
        };
      },
      playerHeaders() {
        return {
          'Authorization': `Bearer ${this.$store.getters.bearerToken}`
        };
      }
    }
  }
</script>
