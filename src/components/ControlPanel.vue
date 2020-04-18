<template>
    <div class="row">
        <div class="col-md-12">
            <div v-if="response && response.outcome">
                <div class="mb-2 flex flex-grow-1 text-center" v-if="response.payline.length > 0">
                    Payline Log: {{ response.payline }}
                </div>
            </div>
            <button v-bind:disabled="spinning" class="btn btn-primary btn-block" @click="trigger">Spin</button>
        </div>
    </div>
</template>
<script>
    import EventBus from "../services/EventBus";
    export default {
        props: {
            response: Object
        },
        data() {
            return {
                spinning: false
            }
        },
        created() {
            EventBus.$on('spinning', (spinning) => {
                this.spinning = spinning;
            });
        },
        methods: {
            trigger() {
                this.$emit('triggered');
            }
        }
    }
</script>