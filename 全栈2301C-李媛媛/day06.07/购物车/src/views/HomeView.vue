<template>
  <div class="box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color=" #54a28a">
      <van-swipe-item v-for="(item, index) in data.bannders" :key="index">
        <img :src="item.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 列表 -->
    <div class="top">
      <h3>商品列表</h3>
      <ul>
        <li v-for="(item, index) in data.shoplist" :key="index">
          <span class="label">{{ item.recommendStatusStr }}</span>
          <img :src="item.pic" alt="" />
          <p class="name">{{ item.name }}{{ item.characteristic }}</p>
          <div class="box1">
            <div class="left">
              <p>
                <span class="green">￥{{ item.minPrice }}</span
                ><span class="s">￥{{ item.originalPrice }}</span>
              </p>
            </div>
            <span class="hz">购买</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { bannerApi, shoplistApi } from "../http/api"; //引入轮播数据，商品列表数据
// 轮播数据
const data = reactive<any>({
  bannders: [],
  shoplist: [],
});
// 数据
const banner = () => {
  bannerApi({}).then((res: any) => {
    // console.log(res);
    data.bannders = res.data.data;
  });
};
// 商品列表sh
const shops = () => {
  shoplistApi({}).then((res: any) => {
    console.log(res);
    data.shoplist = res.data.data.result;
  });
};
banner(); //轮播数据
shops(); //商品列表数据
</script>
<style lang='scss' scoped>
.box {
  background-color: #f8f8f8;
}
.van-swipe-item {
  img {
    width: 100%;
    height: 56.266667vw;
  }
}

.top {
  width: 100%;
  background-color: #fff;
  margin-top: 1.33333333vw;
  h3 {
    width: 100%;
    text-align: center;
    padding: 3.33333333vw;
    height: 13.33333333vw;
  }
  ul {
    padding: 1.33333333vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f8f8f8;
    li {
      padding: 1.33333333vw;
      box-sizing: border-box;
      width: 49%;
      background-color: #fff;
      margin-top: 2.33333333vw;
      border-radius: 1.33333333vw;
      // height: 86.66666667vw;
      img {
        // height: 50vw;
        width: 100%;
        border-radius: 2.66666667vw;
      }
      .name {
        width: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .label {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        width: 15.66666667vw;
        height: 5.33333333vw;
        background-color: #da3130;
        color: #fff;
        text-align: center;
        border-radius: 0 10px 10px 0;
      }
      .box1 {
        display: flex;
        justify-content: space-between;
        margin-top: 1.33333333vw;
      }
      .green {
        padding: 1.33333333vw;
        box-sizing: border-box;
        color: #57a387;
        font-weight: 600;
      }
      .s {
        text-decoration: line-through;
        color: #a5a5a5;
      }
      .hz {
        width: 13.33333333vw;
        height: 6.33333333vw;
        display: inline-block;
        color: #57a387;
        border-radius: 1.33333333vw;
        border: 1px solid #57a387;
        text-align: center;
      }
    }
  }
}
</style>