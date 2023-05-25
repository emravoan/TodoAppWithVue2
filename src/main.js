import Vue from 'vue';
import App from './App.vue';
import store from './store';
import registry from './components/registry';
import './assets/app.css';

Vue.config.productionTip = false;

registry(Vue);

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
