import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.slotTheme = 'default';

new Vue({
  render: h => h(App),
}).$mount('#app');
