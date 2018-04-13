import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedBanana from '@/components/redBanana'
import Vuex from 'vuex'
Vue.use(Router);
Vue.use(Vuex);

let store = new Vuex.Store({
  state : {
    totalPrice : 0
  },
  mutations : {
    increment (state, price){
      state.totalPrice += price;
    },
    decrement (state, price){
      state.totalPrice -= price;
    }
  }
});

export default new Router({
  mode : 'history',
  routes: [
    {//路由从定向：从新定义路由下面是将根路径定向到apple
      path : "/",
      redirect : "/apple"
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/apple/:name/:age',//带参数用：表示参数
      name: 'Apple',
      component: Apple
    },
    {
      path: '/banana',
      name: 'Banana',
      component: Banana,
      children:[  //嵌套路由
        {
          path: 'red',
          name: 'redBanana',
          component: RedBanana,
        }
      ]
    }
  ]
});
/* 编程式的导航 */
/* Router.push(); */
