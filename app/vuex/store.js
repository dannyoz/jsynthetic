import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    active: ''
  },
  mutations: {
    SET_ACTIVE (state, page) {
    	console.log(page);
    	state.active = page;
    }
  }
});

export default store;