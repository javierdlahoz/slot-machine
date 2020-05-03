import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import router from './router'
import VueCurrencyFilter from "vue-currency-filter";

Vue.config.productionTip = false;

window.slotConfig = {
  theme: 'default'
};

Vue.use(VueToast);
Vue.use(VueCurrencyFilter,
  {
    symbol: '€',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  });

Vue.component('slot-control-panel', require('./components/ControlPanel').default);
Vue.component('slot-board', require('./components/Board').default);
Vue.component('slot-reel', require('./components/Reel').default);
Vue.component('splash-screen', require('./components/SplashScreen').default);

//symbols
Vue.component('slot-symbol', require('./components/symbols/Symbol').default);
Vue.component('winner-0', require('./components/symbols/Winner0').default);
Vue.component('winner-1', require('./components/symbols/Winner1').default);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
