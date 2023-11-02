<template>
  <router-view />
  <van-tabbar route   active-color="#57a387">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/shop" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="contact-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
