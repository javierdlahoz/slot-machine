<template>
    <div>
        <splash-screen v-if="loading" :loading-percentage="loadingPercentage"></splash-screen>
        <slot-wrapper :reel-amount="reelsAmount" :rows="rows"></slot-wrapper>
    </div>
</template>
<style lang="scss">
    @import "styles/app";
</style>
<script>
    import config from "./services/config";

    export default {
        data() {
            return {
                loading: true,
                loadingPercentage: 0,
                reelsAmount: config.reels,
                rows: config.rows
            }
        },
        created() {
            this.preload();
        },
        methods: {
            preload() {
                if (this.loadingPercentage > 100) {
                    this.loading = false;
                    return;
                }

                setTimeout(() => {
                    this.loadingPercentage += 5;
                    this.preload();
                },
                    50
                );
            }
        }
    };
</script>