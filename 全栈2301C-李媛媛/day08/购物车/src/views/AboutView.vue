<template>
  <div class="box">
    <div class="box1">
      <div class="left">
        <div class="left1" v-for="(item, index) in data.nvalist" :key="item.id">
          <span
            :class="tabcaolr == index ? 'tabcaolr' : ''"
            @click="tab(index)"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <ul>
        <li v-for="(item, index) in data.shoplists" :key="index">
          <img :src="item.pic" alt="" />
          <p class="name">{{ item.name }}{{ item.characteristic }}</p>
          <div class="box2">
            <div class="left2">
              <p>
                <span class="green">￥{{ item.minPrice }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from "vue";
const tabcaolr = ref(0);
// 分类详情数据
import { categoryApi, shoplistApis } from "../http/api";
const category = () => {
  categoryApi({}).then((res: any) => {
    console.log(res);
    data.nvalist = res.data.data;
  });
};
const data = reactive<any>({
  nvalist: [],
  shoplists: [],
});
const tab = (index: any) => {
  console.log(index);
  tabcaolr.value = index;
};
const shoplists = () => {
  shoplistApis({}).then((res: any) => {
    console.log(res);
    data.shoplists = res.data.data.result;
  });
};
category(); //分类详情数据
shoplists(); //分类数据
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
}
.box1 {
  width: 100%;
  height: 100vh;
  background-color: #f7f8fa;
  display: flex;
  justify-content: space-between;
  .left1 {
    width: 21vw;
    text-align: center;
    // padding: 1.33333333vw;
    box-sizing: border-box;
    height: 17.333333vw;
    line-height: 17.333333vw;
  }
}
.tabcaolr {
  width: 21vw;
  height: 17.333333vw;
  line-height: 17.333333vw;
  border-left: 1.66666667vw solid #57a387;
  background-color: #fff;
  padding: 1.33333333vw;
  box-sizing: border-box;
  display: inline-block;
}

ul {
  padding: 1.33333333vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // background-color: #f8f8f8;
  background-color: #fff;

  li {
    padding: 1.33333333vw;
    box-sizing: border-box;
    width: 49%;
    // border-radius: 1.33333333vw;
    // height: 86.66666667vw;
    img {
      // height: 50vw;
      width: 100%;
      border-radius: 2.66666667vw;
    }
    .name {
      width: 141px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .box2 {
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
  }
}
</style>