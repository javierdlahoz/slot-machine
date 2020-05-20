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
        params.is_fake = this.$route.query.is_fake ? true : undefined;

        EventBus.$emit('spinning', true);
        axios.post(this.spinEndpoint, params, {headers: this.playerHeaders})
          .then(({data}) => {
            this.response = data;
            this.choices = data.data.outcome;
            this.$store.dispatch('setBetResponse', data.data);
            this.$store.dispatch('setBalance', data.data.balance);
            this.$store.dispatch('setPayouts', data.data.payouts);
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
        return `${config.baseUrl}/wager`;
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
