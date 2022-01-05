<template>
  <div id="main-tabbar">
    <router-link to="/home"></router-link>
    <router-link to="/category"></router-link>
    <router-link to="/cart"></router-link>
    <router-link to="/profile"></router-link>
    <!-- <router-view></router-view> -->
    <tabbar>
      <tabbar-item path="/home" itemColor="deeppink">
        <!-- 已设置了路径别名 'assets':resolve('src/assets') 在HTML设置要加 ~ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Home from "views/home/Home.vue";
import Category from "views/category/Category.vue";
import Cart from "views/cart/Cart.vue";
import Profile from "views/profile/Profile.vue";
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
    Home,
    Category,
    Cart,
    Profile,
  },
};
</script>