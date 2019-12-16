import Vue from 'vue';
import App from './App.vue';
import RegisterFontAwesome from '@/script/font-awesome';
import clipboard from 'vue-clipboard2';

Vue.config.productionTip = false;

Vue.use(clipboard);
Vue.use({
  install: vue => RegisterFontAwesome(vue),
});

new Vue({
  render: h => h(App),
}).$mount('#app');
