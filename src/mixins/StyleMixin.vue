<script>
  import config from '../services/config';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        rows: 1,
        cols: 1,
        defaultStyle: 3,
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
      this.cols = this.$store.getters.game.options.cols;
    },
    computed: {
      slotStyle() {
        return `slot-${this.cols}`;
      },
      symbolHeight() {
        return this.symbolDic[`${this.breakpoint}-${config.reels}`];
      },
      slotWindowHeight() {
        return (this.symbolHeight  * this.$store.getters.game.options.rows) + 20;
      },
      reelHeight() {
        return (this.slotWindowHeight * this.$store.getters.game.options.rows) + 10;
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
