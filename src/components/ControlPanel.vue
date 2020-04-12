<template>
    <div class="row">
        <div v-if="response && response.outcome">
            <div class="mb-2 flex flex-grow-1 text-center" v-if="response.outcome.length > 0">{{ response.outcome }}</div>
            <div class="mb-2 flex flex-grow-1 text-center" v-if="response.payline.length > 0">{{ response.payline }}</div>
        </div>
        <button v-bind:disabled="spinning" class="btn btn-primary btn-block" @click="trigger">Spin</button>
    </div>
</template>
<script>
    import EventBus from "../EventBus";
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