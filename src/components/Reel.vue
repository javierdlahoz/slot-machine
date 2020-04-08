<template>
    <div class="slot">
        <div class="slot__window">
            <div class="slot__wrap">
                <div class="slot__item" v-for="opt in reel.items" v-bind:key="opt">
                    <slot-symbol :symbol="opt"></slot-symbol>
                </div>
                <div class="slot__item slot__item--copy">
                    <slot-symbol :symbol="reel.items[0]"></slot-symbol>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            reel: Object
        }
    }
</script>