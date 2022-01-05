<template>
  <div id="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 动态绑定颜色写法（一）isActiveColor 颜色属性-->
    <!-- <div :style="{ color: isActiveColor() }">
      <slot name="item-text"></slot>
    </div> -->
    <!-- 动态绑定颜色写法（二）ActiveColor 颜色的 属性：值-->
    <div :style="activeColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
    return {
      // isActive: false,
      // path: "/profile",
    };
  },
  props: {
    // 动态绑定父组件的path
    path: String,
    // 给项目设置默认颜色
    itemColor: {
      type: String,
      default: "#fba7b7",
    },
  },
  // 写到methods的函数，使用时要加()，computed 里面的函数使用时不需要
  methods: {
    itemClick() {
      // 将获取的path值赋值给$route
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      // indexOf查询字符串个数，查询当前路由的path字符串是否与本身的路径字符串相等
      // return this.$route.path.indexOf(this.path) !== -1;
      // 两种判断方法皆可
      return this.$route.path == this.path;
    },

    // （一）获取颜色属性
    // isActiveColor() {
    //   // return this.itemColor;
    //   if (this.isActive == true) {
    //     return this.itemColor;
    //   } else {
    //   }
    // },

    // （二）颜色的 属性：值
    activeColor() {
      return this.isActive ? { color: this.itemColor } : {};
    },
  },
};
</script>

<style scoped>
#tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.active {
  color: #fba7b7;
}
</style>