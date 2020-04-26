<script>
  import EventBus from "../services/EventBus";
  import config from "../services/config";
  import next from "../services/next";
  import StyleMixin from "./StyleMixin";

  export default {
    mixins: [StyleMixin],
    data() {
      return {
        animationDuration: 3000,
        opts: null,
        startedAt: null,
      };
    },
    methods: {
      startAnimatedSpin() {
        if (this.opts) return;

        this.opts = this.reels.map((data, i) => {
          const slot = this.$refs.reels[i];
          const choice = this.choices[i];

          const opts = {
            el: slot.querySelector(".slot__wrap"),
            finalPos: choice * this.symbolHeight,
            choice: choice,
            startOffset: config.animationSpeed + Math.random() * 500 + i * 500,
            height: data.items.length * this.symbolHeight,
            duration: this.animationDuration + i * config.stopDelay, // milliseconds
            isFinished: false,
          };

          return opts;
        });

        next(this.animateSpin);
      },
      animateSpin(timestamp) {
        if (this.startedAt == null) {
          this.startedAt = timestamp;
        }

        const timeDiff = timestamp - this.startedAt;

        this.opts.forEach((opt) => {
          if (opt.isFinished) {
            return;
          }

          const timeRemaining = Math.max(opt.duration - timeDiff, 0);
          const power = config.reels;
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

        if (this.opts.every((o) => o.isFinished)) {
          this.opts = null;
          this.startedAt = null;
          setTimeout(() => EventBus.$emit("spinning", false), 200);
        } else {
          next(this.animateSpin);
        }
      },
    },
  };
</script>
