<template>
  <div :class="cc">
    {{name}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "我是 redBanana",
      cc: "comb"
    };
  }
};
</script>
