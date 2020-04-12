<template>
    <div>
        <splash-screen v-if="loading" :loading-percentage="loadingPercentage"></splash-screen>
        <slot-wrapper :reel-amount="3" :rows="1"></slot-wrapper>
    </div>
</template>
<style lang="scss">
    @import "styles/app";
</style>
<script>
    export default {
        // TODO: if needed add logic here
        data() {
            return {
                loading: true,
                loadingPercentage: 0
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
                    100
                );
            }
        }
    };
</script>