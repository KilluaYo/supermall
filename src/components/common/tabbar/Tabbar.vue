<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
#tabbar {
  height: 49px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #f6f6f6;
  /* 让左右两边贴紧 */
  font-size: 14px;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 1px -1px 1px rgba(71, 70, 70, 0.2);
}
</style>