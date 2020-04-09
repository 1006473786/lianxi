<template>
  <div id="app">
    <router-view></router-view>
    <Foot :itemss="items" />
  </div>
</template>
<script>
import Foot from "./components/Foot.vue";
export default {
  name: "app",
   data() {
    return {
      items: [
        { name: "首页", href: "/" },
        { name: "关于页", href: "/About" },
        { name: "列表", href: "/List" },
        { name: "详情", href: "/Detial" },
        { name: "我喜欢", href: "/Ilike" }
      ]
    }
  },
  components: {
    Foot
  },
 
};
</script>

