<template>
  <div>
    <h1>关于娶媳妇的问题</h1>
    <div>
      <router-link to="/">首页</router-link>
      <br />
      <router-link to="/list">列表页</router-link>
      <br />
      <router-link to="/detial">详情页</router-link>
      <br />
      <router-link to="/ilike">我喜欢的</router-link>
    </div>
    <Infinite :banners="bannerslist" />
  </div>
</template>
<script>
import Infinite from "./Infinite.vue";
import axios from "axios";
export default {
  data() {
    return {
      bannerslist: []
    };
  },
  methods: {
    getlist() {
      axios
        .get(
          "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=1907384",
          {
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586155303412316861122","bc":"440300"}',
              "X-Host": "mall.film-ticket.cinema.list"
            }
          }
        )
        .then(res => {
          let data = res.data;
          if (data.status === 0) {
            let arr = [];
            for (let i in data) {
              arr.push(data[i]);
            }
            this.bannerslist = arr[1].cinemas;
            console.log(arr[1].cinemas);
          } else {
            alert(data.msg);
          }
        });
    }
  },
  created() {
    this.getlist();
  },
  components: {
    Infinite
  }
};
</script>
<style scoped>
@import "../styles/commont.css";
.list-item {
  background-color: skyblue;
  border-bottom: 1px solid #000;
}
.infinite-list-wrapper {
  height: 240px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>