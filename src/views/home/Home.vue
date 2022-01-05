<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView";

export default {
  name: "Home",
  components: {
    NavBar,
    getHomeMultidata,
    HomeSwiper,
    RecommendView,
  },
  // 定义变量接受网络请求回来的数据
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  // 生命周期函数，组件创建后就发送网络请求
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  text-align: center;
  color: #fff;
  background-color: var(--color-tint);
}
</style>