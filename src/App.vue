<template>
  <div id="app">
    <router-view></router-view>
    <Foot />
  </div>
</template>
<script>
import Foot from "./components/Foot.vue";
export default {
  name: "app",
  components: {
    Foot
  }
};
</script>

