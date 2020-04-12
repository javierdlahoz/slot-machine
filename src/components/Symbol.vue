<template>
    <div>
        <div class="slot__symbol-wrapper position-relative"
             v-bind:style="{'background-image': 'url(' + imageSrc + ')'}">
            <div class="slot__symbol-winner" v-if="isWinner && !spinning">
                <font-awesome-icon icon="star" />
            </div>
        </div>
    </div>
</template>
<script>
    import EventBus from "../EventBus";
    export default {
        props: {
            symbol: Number,
            isWinner: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                spinning: false
            }
        },
        created() {
            EventBus.$on('spinning', (spinning) => {
                this.spinning = spinning;
            })
        },
        computed: {
            imageSrc() {
                return require(`../assets/themes/${window.slotConfig.theme}/symbols/${this.symbol}.png`);
            }
        }
    }
</script>