import Vue from 'vue';
import store from './vuex/store';
import index from './components/index.vue';

new Vue({
  el: '#js-app',
  store,
  components: {
  	index: index
  }
});
