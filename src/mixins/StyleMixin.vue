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
          'lg-5': 160,
          'md-5': 160,
          'sm-5': 110,
          'xs-5': 110,
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
        return this.symbolDic[`${this.breakpoint}-${this.$store.getters.game.options.cols}`];
      },
      slotWindowHeight() {
        return (this.symbolHeight  * this.$store.getters.game.options.rows);
      },
      reelHeight() {
        const rows = this.$store.getters.game.options.rows;
        const offset = ['sm', 'xs'].includes(this.breakpoint) ? 6 : 20;

        return rows > 1 ? (this.slotWindowHeight * rows) : this.slotWindowHeight + offset;
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
