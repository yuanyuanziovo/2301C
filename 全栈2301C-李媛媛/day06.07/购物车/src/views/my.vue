<template>
  <div>
    <div class="box">
      <div class="top">
        <button><img src="../assets/1.jpg" alt="" /></button>
        <h4><span>登录/注册</span></h4>
      </div>
      <div class="bottom">
        <ul class="jifen">
          <li class="hh">
            <div class="q">
              <h3>--</h3>
              <p>积分</p>
            </div>
          </li>
          <li>
            <div class="q">
              <h3>--</h3>
              <p>优惠卷</p>
            </div>
          </li>
          <li>
            <div class="q">
              <h3>--</h3>
              <p>余额</p>
            </div>
          </li>
        </ul>
        <ul class="dingdan">
          <div class="d">
            <h3>我的订单</h3>
            <span>查看全部订单></span>
          </div>
          <ul class="kfk">
            <li>
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li>
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li>
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li>
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li>
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
          </ul>
        </ul>

        <ul class="dingdan">
          <div class="d">
            <h3>常用功能</h3>
          </div>
          <ul class="kfk1">
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li></li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
            <li class="li">
              <div class="q">
                <span><van-icon name="like-o" /></span>
                <p>代付款</p>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  .top {
    width: 100%;
    height: 39.66666667vw;
    background-color: #50a586;
    display: flex;
    padding: 4.66666667vw;
    box-sizing: border-box;
    button {
      width: 22.33333333vw;
      height: 22.33333333vw;
      background-color: #fff;
      display: inline-block;
      border: 0;
      border-radius: 50%;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    h4 {
      margin-left: 3.33333333vw;
      box-sizing: border-box;
      color: #fff;
      font-size: 4.33333333vw;
      margin-top: 8.66666667vw;
    }
  }
}
.bottom {
  padding: 5.33333333vw;
  .jifen {
    text-align: center;
    width: 100%;
    height: 20.33333333vw;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    padding: 5.33333333vw;
    border-radius: 2.33333333vw;
  }
  .dingdan {
    margin-top: 4.66666667vw;
    width: 100%;
    height: 35vw;
    background-color: #fff;
    border-radius: 1.33333333vw;
    .d {
      display: flex;
      padding: 2.33333333vw;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      span {
        font-size: 3.66666667vw;
        color: #ccc;
      }
      h3 {
        font-size: 3.33333333vw;
      }
    }
    .kfk {
      padding: 1.33333333vw;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: space-between;
      margin-top: 2.66666667vw;
    }
    .kfk1 {
      padding: 1.33333333vw;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      display: flex;
      margin-top: 2.66666667vw;
      flex-wrap: wrap;
      .li {
        width: 25%;
      }
    }
  }
}
</style>