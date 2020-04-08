import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Wrapper from './components/Wrapper';
import Reel from './components/Reel';
import Symbol from "./components/Symbol";

Vue.config.productionTip = false;

window.slotConfig = {
  theme: 'default'
};

Vue.component('slot-wrapper', Wrapper);
Vue.component('slot-reel', Reel);
Vue.component('slot-symbol', Symbol);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
