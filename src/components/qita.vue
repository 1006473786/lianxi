<template>
  <div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(list,index) in count" :key="index" class="list-item">
          {{ list }}
          <span>{{ list.name }}</span>
          <span>{{ list.address }}</span>
          <span>{{ list.logoUrl }}</span>
        </li>
      </ul>
      <p v-if="loading">加载中......</p>
      <p v-if="noMore">没有更多了jjj</p>
    </div>
    <li v-for="(item,index) in items" :key="index">
      <img src="item.logoUrl" />
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      count: 10,
      loading: false,
      list: Array,
      items: [],
      name: "",
      address: "",
      logoUrl: ""
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
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
          // this.list = res.data;
          // console.log(list);
          let data = res.data;
          if (data.status === 0) {
            this.items = res.data;
            this.logoUrl = list.logoUrl;
          } else {
            alert(list.msg);
          }
        });
    }
  },
  created() {
    this.getlist();
  }
};
</script>