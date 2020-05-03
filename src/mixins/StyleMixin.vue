<script>
  import config from '../services/config';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        rows: 1,
        symbolDic: {
          'lg-3': 130,
          'md-3': 130,
          'sm-3': 130,
          'xs-3': 130,
          'lg-4': 130,
          'md-4': 130,
          'sm-4': 130,
          'xs-4': 130,
          'lg-5': 130,
          'md-5': 130,
          'sm-5': 130,
          'xs-5': 130,
        }
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
      this.rows = this.$store.getters.game.options.rows;
    },
    computed: {
      slotStyle() {
        return `slot-${config.reels}`;
      },
      symbolHeight() {
        return this.symbolDic[`${this.breakpoint}-${config.reels}`];
      },
      slotWindowHeight() {
        return this.symbolHeight;
      },
      reelHeight() {
        return this.slotWindowHeight + 20;
      },
      breakpoint() {
        if (this.windowWidth > 1200) {
          return 'lg';
        } else if (this.windowWidth > 992) {
          return 'md';
        } else if (this.windowWidth > 768) {
          return 'sm';
        } else {
          return 'xs';
        }
      }
    }
  }
</script>
