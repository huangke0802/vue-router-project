<template>
  <div :class="cc">
    <h1>{{name}}</h1>
    <!-- 这是路由部分的内容 -->
<!--     <router-view></router-view>
    <router-link :to="{path:'banana/red'}">to redBanana</router-link> -->
    <button @click="addOne">加 1 </button>
    <button @click="minusOne">减 1 </button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      name: "我是 banana",
      cc: "comb",
      price : 15
    };
  },
    methods:{
    addOne(){
      this.$store.commit('increment', this.price);
    },
    minusOne(){
      this.$store.commit('decrement', this.price);
    }
  }
};
</script>
