// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  /* get方法，获取state中的数据，不需要每次直接操作state中的数据，通过getters方法获取 */

  getters: {
    getTotalPrice(state) {
      return state.totalPrice;
    }
  },
  mutations: {
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    }
  },
  /* actions 中与后台api数据交互，再执行mutations中的方法 */
  actions : {
    increase (context, price){
      context.commit("increment", price);
    },
    decrease(context, price){
      context.commit("decrement", price);
    }
  }
});

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
