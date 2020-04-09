<template>
  <div>
    <ul>
      <li v-for="(banner,index) in banners" :key="index.length">
        {{ banner.logoUrl }}
        <img :src="banner.logoUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      logoUrl: ""
    }
  }
};
</script>