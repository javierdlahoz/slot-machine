<script>
  import config from '../services/config';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        rows: 1,
        cols: 1,
        defaultStyle: 3,
        theme: config.theme,
        symbolDic: {
          'lg-3': 190,
          'md-3': 190,
          'sm-3': 190,
          'xs-3': 190,
          'lg-4': 190,
          'md-4': 190,
          'sm-4': 190,
          'xs-4': 190,
          'lg-5': 190,
          'md-5': 190,
          'sm-5': 190,
          'xs-5': 190,
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
        return (this.symbolHeight  * this.$store.getters.game.options.rows);
      },
      reelHeight() {
        return (this.slotWindowHeight * this.$store.getters.game.options.rows);
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
