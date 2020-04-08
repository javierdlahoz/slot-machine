<template>
    <div>
        <div class="slot-machine">
            <div ref="reels" v-for="(reel, index) in reels" v-bind:key="index">
                <slot-reel :reel="reel">
                </slot-reel>
            </div>
        </div>
        <button @click="start" style="display: block">start</button>
    </div>
</template>
<script>
    const next =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (cb) {
            window.setTimeout(cb, 1000 / 60);
        };

    export default {
        props: {
            reelAmount: Number,
            rows: Number,
            symbolsAmount: {
                type: Number,
                default: 25
            }
        },
        data() {
            return {
                opts: null,
                startedAt: null
            };
        },
        methods: {
            start() {
                if (this.opts) return;

                this.opts = this.reels.map((data, i) => {
                    const slot = this.$refs.reels[i];
                    const choice = Math.floor(Math.random() * data.items.length);

                    const opts = {
                        el: slot.querySelector(".slot__wrap"),
                        finalPos: choice * 180,
                        startOffset: 2000 + Math.random() * 500 + i * 500,
                        height: data.items.length * 180,
                        duration: 3000 + i * 700, // milliseconds
                        isFinished: false
                    };

                    return opts;
                });

                next(this.animate);
            },
            animate(timestamp) {
                if (this.startedAt == null) {
                    this.startedAt = timestamp;
                }

                const timeDiff = timestamp - this.startedAt;

                this.opts.forEach(opt => {
                    if (opt.isFinished) {
                        return;
                    }

                    const timeRemaining = Math.max(opt.duration - timeDiff, 0);
                    const power = 3;
                    const offset =
                        (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) *
                        opt.startOffset;

                    // negative, such that slots move from top to bottom
                    const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height);

                    opt.el.style.transform = "translateY(" + pos + "px)";

                    if (timeDiff > opt.duration) {
                        opt.isFinished = true;
                    }
                });

                if (this.opts.every(o => o.isFinished)) {
                    this.opts = null;
                    this.startedAt = null;
                } else {
                    next(this.animate);
                }
            },
            getShuffledSymbols() {
                let array = JSON.parse(JSON.stringify(this.symbols));
                let counter = this.symbols.length;

                while (counter > 0) {
                    let index = Math.floor(Math.random() * counter);
                    counter--;
                    let temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }

                return array;
            }
        },
        computed: {
            symbols() {
                return Array.from(Array(this.symbolsAmount).keys());
            },
            reels() {
                let reels = [];
                // eslint-disable-next-line for-direction
                for (let i = 0; i < this.reelAmount; i++) {
                    reels.push({items: this.getShuffledSymbols()});
                }
                return reels;
            }
        }
    }
</script>