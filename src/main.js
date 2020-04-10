import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false;

window.slotConfig = {
  theme: 'default'
};

Vue.component('slot-wrapper', require('./components/Wrapper').default);
Vue.component('slot-reel', require('./components/Reel').default);
Vue.component('slot-symbol', require('./components/Symbol').default);

new Vue({
  render: h => h(App),
}).$mount('#app');
