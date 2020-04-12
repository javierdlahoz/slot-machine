import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

window.slotConfig = {
  theme: 'default'
};

Vue.component('slot-control-panel',  require('./components/ControlPanel').default);
Vue.component('slot-wrapper', require('./components/Wrapper').default);
Vue.component('slot-reel', require('./components/Reel').default);
Vue.component('slot-symbol', require('./components/Symbol').default);
Vue.component('splash-screen', require('./components/SplashScreen').default);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
