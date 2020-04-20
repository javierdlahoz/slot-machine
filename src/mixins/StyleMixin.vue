<script>
  import config from '../services/config';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        symbolDic: {
          'lg-3': 180,
          'md-3': 180,
          'sm-3': 180,
          'xs-3': 120,
          'lg-4': 180,
          'md-4': 180,
          'sm-4': 180,
          'xs-4': 120,
          'lg-5': 180,
          'md-5': 180,
          'sm-5': 180,
          'xs-5': 120,
        }
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      })
    },
    computed: {
      slotStyle() {
        return `slot-${config.reels}`;
      },
      symbolHeight() {
        return this.symbolDic[`${this.breakpoint}-${config.reels}`];
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
