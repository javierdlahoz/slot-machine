<script>
    import config from "../services/config";
    import EventBus from "../services/EventBus";
    import axios from "axios";

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
                axios.get(this.endpoint, {params: this.params})
                    .then(({data}) => {
                        this.response = data;
                        this.choices = data.outcome;
                        this.payline = data.payline ? data.payline : [];
                        callback(data);
                    })
                    .catch((data) => {
                        error(data);
                    });
            }
        },
        computed: {
            endpoint() {
                return `${config.endpoint}`;
            },
            params() {
                return {
                    api_token: config.token
                }
            }
        }
    }
</script>