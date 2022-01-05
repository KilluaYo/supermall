<template>
  <div class="recommend-view">
    <ul>
      <li v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend-view ul {
  display: flex;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommend-view li {
  flex: 1;
  padding: 0 5px;
  list-style: none;
  text-align: center;
  font-size: 14px;
  /* background-color: #ffa; */
}
.recommend-view img {
  width: 100%;
  margin-bottom: 5px;
}
</style>