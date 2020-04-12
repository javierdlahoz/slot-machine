<template>
    <div class="container wrapper">
        <div class="row mt-4 mb-4">
            <div class="reel-container col-4" ref="reels" v-for="(reel, index) in reels" v-bind:key="index">
                <slot-reel :reel="reel" :is-winner="hasWinnerSymbol(index)"></slot-reel>
            </div>
        </div>
        <slot-control-panel @triggered="retrieveData" :response="response"></slot-control-panel>
    </div>
</template>
<script>
    import axios from 'axios';
    import EventBus from "../EventBus";

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
                startedAt: null,
                loading: false,
                choices: [],
                response: {},
                payline: []
            };
        },
        computed: {
            endpoint() {
                return 'https://casino.nomadnt.com/game/1/spin?api_token=uhg8usBbZ6r0v9Yu0pW59lz3DRTP0jxr1XK9COrFdCE9SqGfBXu4x0P8vduuWN4x6Gf1bY1H6aSugRGj';
            },
            reels() {
                let reels = [];
                // eslint-disable-next-line for-direction
                for (let i = 0; i < this.reelAmount; i++) {
                    reels.push({items: [...Array(this.symbolsAmount).keys()]});
                }
                return reels;
            },
            symbols() {
                return Array.from(Array(this.symbolsAmount).keys());
            }
        },
        methods: {
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
                    const power = this.reelAmount;
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
                    setTimeout(() => EventBus.$emit('spinning', false), 200);
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
            },
            hasWinnerSymbol(index) {
                return !!(this.payline[index] && this.payline[index] === 1);
            },
            retrieveData() {
                EventBus.$emit('spinning', true);
                axios.get(this.endpoint)
                    .then(({data}) => {
                        this.response = data;
                        this.choices = data.outcome;
                        this.payline = data.payline ? data.payline : [];
                        this.spin();
                    })
            },
            spin() {
                if (this.opts) return;

                this.opts = this.reels.map((data, i) => {
                    const slot = this.$refs.reels[i];
                    const choice = this.choices[i];

                    const opts = {
                        el: slot.querySelector(".slot__wrap"),
                        finalPos: choice * 180,
                        choice: choice,
                        startOffset: 2000 + Math.random() * 500 + i * 500,
                        height: data.items.length * 180,
                        duration: 3000 + i * 700, // milliseconds
                        isFinished: false
                    };

                    return opts;
                });

                next(this.animate);
            }
        }
    }
</script>