<template>
    <div>
        <div class="slot__symbol-wrapper position-relative"
             v-bind:style="{'background-image': 'url(' + imageSrc + ')'}">
            <div class="font-weight-bold">{{ symbol }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            symbol: Number
        },
        computed: {
            imageSrc() {
                return require(`../assets/themes/${window.slotConfig.theme}/${this.symbol}.png`);
            }
        }
    }
</script>