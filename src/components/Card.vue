<template>
  <div>
    <ul class="goCard">
      <li v-for="(item,index) in goodslist" :index="index" :key="item.id">
        <div>{{item.name}}</div>
        <div>{{item.money}}</div>
        <div class="jisuan">
          <button @click="sub(item,index)">-</button>
          <span>{{item.num}}</span>
          <button @click="add(item)">+</button>
        </div>
        <div>{{item.total}}</div>
        <button @click="sub(index)">删除</button>
        <!-- <button @click="goodslist.splice(index,1)">删除</button> -->
      </li>
      <div class="total" style="padding-left: 113px">总价:{{total}}</div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'aab',
      cardData: [],
      goodslist: [
        {
          id: "x",
          name: "x",
          money: "xx",
          num: "xx",
          total: "0.00",
        },
      ],
    };
  },
  methods: {
    sub(item, index) {
      if (item.num > 1) {
        item.num--;
        item.total = item.num * item.money;
      } else {
        if (confirm("是否取消此商品")) {
          this.deleted(index);
        }
      }
    },
    add(item) {
      item.num += 1;
      item.total = item.num * item.money;
    },
    deleted(index) {
      this.goodslist.splice(index, 1);
    },
  },
  computed: {
    total() {
      return this.goodslist.reduce((total, item) => {
        return (total += item.total);
      }, 0);
    },
  },
  watch: {
    goodslist: {
      handler() {
        window.localStorage.setItem("cardData", JSON.stringify(this.goodslist));
      },
      deep: true,
    },
  },
  created() {
    if (window.localStorage.getItem("cardData") != null) {
      //获取本地存储数据
      this.goodslist = JSON.parse(window.localStorage.getItem("cardData"));
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.goCard {
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.goCard > li {
  margin: 20px 0;
  widows: 100%;
  display: flex;
  justify-content: space-around;
}
.jisuan > button {
  width: 50px;
  background: rgba(100, 237, 225, 0.473);
}
</style>