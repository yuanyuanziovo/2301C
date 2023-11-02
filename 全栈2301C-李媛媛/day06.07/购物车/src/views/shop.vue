<template>
  <div class="shop">
    <van-empty description="描述文字" />
    <div class="shop1">
      <p>登录后才能看到您的购物车</p>
      <button @click="golongin">去登录</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const golongin = () => {
  router.push("/loding");
};
const router = useRouter();
</script>
<style lang='scss' scoped>
.shop {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
}
.shop1 {
  text-align: center;
  p {
    padding: 15.33333333vw;
    box-sizing: border-box;
  }
  button {
    width: 21vw;
    background-color: #50a586;
    border: 0;
    display: inline-block;
    height: 9vw;
    border-radius: 4.66666667vw;
    color: #fff;
    // margin-top: 5.33333333vw;
  }
}
</style>