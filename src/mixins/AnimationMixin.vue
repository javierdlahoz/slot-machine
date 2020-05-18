<script>
  import EventBus from "../services/EventBus";
  import config from "../services/config";
  import next from "../services/next";
  import StyleMixin from "./StyleMixin";

  export default {
    mixins: [StyleMixin],
    data() {
      return {
        opts: null,
        startedAt: null,
        finished: false,
        animationPositionJump: 100
      };
    },
    methods: {
      startAnimation() {
        this.opts = this.reels.map((data, i) => {
          const slot = this.$refs.reels[i];

          const opts = {
            el: slot.querySelector(".slot__wrap"),
            finalPos: 0,
            choice: 0,
            startOffset: config.animationSpeed + Math.random() * 500 + i * 500,
            offset: 0,
            height: data.items.length * this.symbolHeight,
            duration: config.animationDuration + i * config.stopDelay,
            isFinished: false,
          };

          return opts;
        });
        next(this.spiningAnimation);
      },
      spiningAnimation(offset = 0) {
        this.opts.forEach((opt) => {
          const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height);
          opt.el.style.transform = "translateY(" + pos + "px)";
          opt.offset = offset;
        });

        if (!this.finished) {
          setTimeout(() => {
            this.spiningAnimation(offset + Math.random() * this.animationPositionJump);
          }, 5);
        }
      },
      stopAnimation() {
        this.finished = true;
        this.animateStop();
      },
      animateStop(timestamp) {
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
            opt.offset;

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
          this.finished = false;
          setTimeout(() => EventBus.$emit("spinning", false), 200);
        } else {
          next(this.animateStop);
        }
      },
    },
  };
</script>
