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
      retrieveData(callback, error) {
        EventBus.$emit('spinning', true);
        axios.get(this.endpoint, this.config)
          .then(({data}) => {
            this.response = data;
            this.choices = data.data.payload.outcome;
            this.payline = data.data.payload.payline ? data.data.payload.payline : [];
            callback(data);
          })
          .catch((data) => {
            EventBus.$emit('spinning', false);
            Vue.$toast.error('Something went wrong');
            error(data);
          });
      }
    },
    computed: {
      endpoint() {
        return `${config.endpoint}`;
      },
      headers() {
        const bearerToken = this.$store.getters.bearerToken;

        return bearerToken ?
          {
            'Authorization': `Bearer ${bearerToken}`
          }
          : {};
      },
      config() {
        return {
          params: this.params,
          headers: this.headers
        };
      },
      params() {
        return {};
      }
    }
  }
</script>