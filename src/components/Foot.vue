<template>
  <div class="index">
    <router-link to="/">首页</router-link>
    <br />
    <router-link to="/about">关于页</router-link>
    <br />
    <router-link to="/list">列表页</router-link>
    <br />
    <router-link to="/detial">详情页</router-link>
    <br />
    <router-link to="/ilike">我喜欢的</router-link>
  </div>
</template>
<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 60px;
  border: 1px solid #000;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>