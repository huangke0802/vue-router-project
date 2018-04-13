<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 通过transition来设置路由切换的过度效果，keep-alive缓存请求过的页面，减少资源 -->
    <!-- <transition name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
    </transition>

    <router-link :to="{path : 'apple'}">to Apple</router-link>
    <router-link :to="{path : 'banana'}">to Banana</router-link>
    <router-link :to="{path : 'banana/red'}">to Banana REd</router-link>-->
    <!-- 默认是a标签，可以通过tag来改变标签 改成li标签 -->
    <!-- <router-link to="/apple" tag="li">li标签使用to跳转</router-link> -->
    <!-- :to 等号里是js的对象或者变量，用字符串要打引号 -->
   <!--  <router-link :to="'/apple'" >a22标签使用to跳转</router-link>
    <router-link :to="applePath" >a33标签使用to跳转</router-link>
    <router-link :to="appleObje" >a44标签使用to跳转</router-link> -->
    <!-- param 是路由的参数 -->
   <!--  <router-link :to="{path : 'apple' ,param : {name:'red', age:'10'}}">to Banana REd</router-link> -->

    <!-- 给路由地址去个名字name 可以通过name跳转 具名的路由 -->
    <!--  <router-link :to="{name : 'Banana'}" >通过name跳转</router-link> -->

    <!-- vuex 状态管理 安装 ： npm install vuex --save  -->
    <h1>{{msg}}</h1>
    <h2>{{totalPrice}}</h2>
    <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
import Apple from "./components/apple";
import Banana from "./components/banana";
export default {
  name: 'App',
  components : {Apple, Banana},
  computed : { //计算属性
    totalPrice(){
      return this.$store.getters.getTotalPrice
    }
  },
  data(){
    return {
      applePath : "/apple",
      appleObje : {
        path : 'apple',
        param : { //param 是路由的参数
          name : "red",
          age : 10
        }
      },
      msg : "我是vuex状态管理器"
    }

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
