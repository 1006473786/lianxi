<template>
  <ul class="index">
    <li
     v-for="(item, index) in itemss" 
     :key="index"
     >
      <router-link :to="item.href">
        <span>{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    itemss: {
      type: Array
    }
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.index {
  width: 100%;
  height: 60px;
  border-top: 1px solid #000;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
span:hover {
  color: aqua;
}
</style>