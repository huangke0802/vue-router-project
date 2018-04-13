<template>
  <div :class="cc">
    <h1>{{name}}</h1>
    <!-- 这是路由部分的内容 -->
    <!-- <p>{{$route.params.name}}</p>
    <button @click = 'getParams'>get Params</button> -->
    <button @click="addOne">加 1 </button>
    <button @click="minusOne">减 1 </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "我是 Apple",
      cc: "comb",
      price : 5
    };
  },
  methods:{
    getParams(){
      //获取传来的参数
      console.log(this.$route.params);
    },
    addOne(){
      // this.$store.commit('increment', this.price);
      this.$store.dispatch("increase", this.price);
    },
    minusOne(){
      //this.$store.commit('decrement', this.price);
      this.$store.dispatch("decrease", this.price);
    }
  }
};
</script>
