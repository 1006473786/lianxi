<template>
  <div>
    <ul class="goCard">
      <li v-for="(item,index) in goodslist" :index="index" :key="item.id">
        <div>{{item.goodsName}}</div>
        <div>{{item.price}}</div>
        <div class="jisuan">
          <button @click="sub(item)">-</button>
          <span>{{item.count}}</span>
          <button @click="add(item)">+</button>
        </div>
        <div>{{item.sum}}</div>
        <button @click="deleted">删除</button>
        <button @click="goodslist.splice(index,1)">删除</button>
      </li>
      <div class="total" style="padding-left: 113px">总价:{{total}}</div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardData: [],
      goodslist: [
        {
          id: 1,
          goodsName: "小可爱",
          price: 100,
          count: 1,
          sum: 100
        },
        {
          id: 2,
          goodsName: "da可爱",
          price: 200,
          count: 1,
          sum: 200
        },
        {
          id: 3,
          goodsName: "很可爱",
          price: 300,
          count: 1,
          sum: 300
        },
        {
          id: 4,
          goodsName: "不可爱",
          price: 400,
          count: 1,
          sum: 400
        }
      ]
    };
  },
  methods: {
    sub(item) {
      if (item.count > 1) {
        item.count -= 1;
        item.sum = item.count * item.price;
      } else {
        // if (confirm("是否取消")) {
        this.deleted();
        // }
      }
    },
    add(item) {
      item.count += 1;
      item.sum = item.count * item.price;
    },
    deleted(index) {
      this.goodslist.splice(index, 1);
    }
  },
  computed: {
    total() {
      return this.goodslist.reduce((total, item) => {
        return (total += item.sum);
      }, 0);
    }
  },
  watch: {
    goodslist: {
      handler() {
        window.localStorage.setItem("cardData", JSON.stringify(this.goodslist));
      },
      deep: true
    }
  },
  created() {
    if (window.localStorage.getItem("cardData") != null) {
      //获取本地存储数据
      this.goodslist = JSON.parse(window.localStorage.getItem("cardData"));
    }
  }
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