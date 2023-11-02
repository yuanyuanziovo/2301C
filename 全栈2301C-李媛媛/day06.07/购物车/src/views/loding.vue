<template>
  <div class="log">
    <div class="h">
      <h2>验证码登录</h2>
      <p class="hs">为了你的账号安全,请用手机登录</p>
      <p class="x">
        <span class="m">中国+86</span>
        <input type="text" placeholder="请输入手机号" />
      </p>
      <p class="dis">
        <input type="text" placeholder="请输入4位验证码" />
        <span class="ls">获取验证码</span>
      </p>
      <button class="dl">登录</button>

      <p class="s">
        <span>密码登录</span>
        <span>免费注册</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang='scss' scoped>
.log {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
}
h2{
  padding: 1.33333333vw;
}
.h {
  padding: 5.66666667vw;
  .hs {
    color: #ccc;
  }
  input {
    border: 0;
    margin-left: 1.33333333vw;
    margin-right: 1.33333333vw;
    background-color: #f8f8f8;
  }
  .x {
    padding: 3.33333333vw;
    border-bottom: 1px solid #ccc;
    margin-top: 1.33333333vw;
  }
  .m {
    padding: 10px;
    box-sizing: border-box;
  }
  .dis {
    border-bottom: 1px solid #ccc;
    padding: 3.33333333vw;
    .ls {
      color: #5e8add;
      margin-left: 8.66666667vw;
    }
  }
}
.dl {
  margin-top: 4.66666667vw;
  width: 90vw;
  display: inline-block;
  border: 0;
  background-color: #a3cdbf;
  color: #fff;
  height: 10.66666667vw;
  border-radius: 1.33333333vw;
}
.s {
  margin-top: 2.66666667vw;
  display: flex;
  color: #5e8add;
  justify-content: space-between;
}
</style>