<template>
  <div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(banner,index,value) in banners" :key="index.id" class="list-item">
          {{ ++index }}:
          {{ banner.name }}:
          {{ value }}
          {{ index.id }}
          {{new Date()}}
          <br />
          <span>{{ banner.address }}</span>
        </li>
      </ul>
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.5)"
      >
        <template slot="empty">
          <p>{{dataText}}</p>
        </template>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Infinite",
  data() {
    return {
      count: 0, //当前页
      loading: false,
      pageSize: 6, //每页个数
      total: 10, //共几个
      banners: [],
      dataText: "",
    };
  },
  computed: {
    noMore() {
      // console.log(this.count >= this.total, "fff");
      //当前页和,和返回的总页面对比
      return this.count >= this.total;
    },
    disabled() {
      //当两个都为真的时候不加载,页面滚动失效
      return this.loading || this.noMore;
    },
  },
  created() {
    this.bannerss();
  },
  methods: {
    load() {
      this.count += 10;
      this.loading = true;
      setTimeout(() => {
        this.bannerss();
      }, 1000);
    },
    bannerss() {
      axios
        .get(
          "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=8479580",
          {
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586155303412316861122"}',
              "X-Host": "mall.film-ticket.cinema.list",
            },
          }
        )
        .then((res) => {
          this.loading = false;
          if (res.status === 200) {
            this.banners = res.data.data.cinemas.slice(0, this.count);
            // this.total = res.data.data.cinemas.length;
            this.total = 30;
            if (this.count == 30) {
              this.dataText = "没有更多了 ";
            }
          } else {
            alert(res.data.msg);
          }
        });
    },
  },
};
</script>
<style scoped>
.adress {
  height: 110px;
  overflow: auto;
}
.infinite-list-wrapper {
  width: 100%;
  height: 400px;
  border-top: 1px solid rebeccapurple;
}
.list {
  width: 100%;
}
.list li {
  height: auto;
  /* margin: 5px 0; */
  background: #8711;
  list-style: decimal;
  border-bottom: 1px solid #fff;
}
.infinite-list-wrapper p {
  /* text-align: center; */
}
</style>