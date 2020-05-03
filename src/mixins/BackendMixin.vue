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
        axios.post(this.spinEndpoint, params, this.config)
          .then(({data}) => {
            this.response = data;
            this.choices = data.data.payload.outcome;
            this.payline = data.data.payload.payline ? data.data.payload.payline : [];
            this.$store.dispatch('setBetResponse', data.data);
            callback(data);
          })
          .catch((data) => {
            EventBus.$emit('spinning', false);
            Vue.$toast.error('Something went wrong');
            error(data);
          });
      },
      retrieveGames(callback, error) {
        axios.get(this.gamesEndpoint, this.config)
          .then(({data}) => {
            callback(data);
          }).catch((data) => {
            Vue.$toast.error('Something went wrong');
            error(data);
          });
      },
      retrieveGame(callback, error) {
        axios.get(this.gameEndpoint, this.config)
          .then(({data}) => {
            callback(data);
          }).catch((data) => {
            Vue.$toast.error('Something went wrong');
            error(data);
          });
      }
    },
    computed: {
      spinEndpoint() {
        return `${config.baseUrl}/games/${config.gameId}/spin`;
      },
      gamesEndpoint() {
        return `${config.baseUrl}/games`;
      },
      gameEndpoint() {
        return `${config.baseUrl}/games/${config.gameId}`;
      },
      config() {
        return {
          headers: this.headers
        };
      },
      headers() {
        return {
          'Authorization': `Bearer ${config.token}`
        };
      }
    }
  }
</script>