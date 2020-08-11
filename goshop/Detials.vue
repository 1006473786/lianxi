<template>
  <div>
    <!-- <h1>你到底是怎么想的呢</h1>
    <h2>首先你得有个好的工作</h2>-->
    <router-link to="/">首页</router-link>
    <span>今天你最美</span>
    <div class="header">
      <div>
        <img
          class="img001"
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3092118679,2212554115&fm=26&gp=0.jpg"
        />
        <p>
          电影描述：
          <span>跨境电商供货方科技库斯库斯砥节奉公是开发商开具方是否勘设股份手机号官方说法就是给对方就是手机号很舒服的关键是副书记</span>
        </p>
      </div>
      <ul class="actor">
        <li ref="uldom" v-for="(actor,index) in actors" :key="index">
          <img :src="actor.url" />
          <br />
          <span>演员：{{ actor.name }}</span>
          <br />
          <span>价格：{{ actor.money }}</span>
          <button @click="Append(actor)" class="Append">加入购物车</button>
        </li>
      </ul>
      <!-- <button @click="Append">加入购物车</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goShop: [],
      actors: [
        {
          id: 1,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586538040279&di=7700da9f5304ec3b455cfb9f3a509e06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F4e9c30f18cef45208de718f6d2cff490.jpeg",
          name: "幂幂01",
          money: "10元"
        },
        {
          id: 2,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586538040279&di=7700da9f5304ec3b455cfb9f3a509e06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F4e9c30f18cef45208de718f6d2cff490.jpeg",
          name: "幂幂02",
          money: "9元"
        },
        {
          id: 3,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586538040279&di=7700da9f5304ec3b455cfb9f3a509e06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F4e9c30f18cef45208de718f6d2cff490.jpeg",
          name: "幂幂03",
          money: "8元"
        },
        {
          id: 4,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586538040279&di=7700da9f5304ec3b455cfb9f3a509e06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F4e9c30f18cef45208de718f6d2cff490.jpeg",
          name: "幂幂04",
          money: "7元"
        },
        {
          id: 5,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586538040279&di=7700da9f5304ec3b455cfb9f3a509e06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F4e9c30f18cef45208de718f6d2cff490.jpeg",
          name: "幂幂05",
          money: "10元"
        }
      ]
    };
  },
  methods: {
    Append(actor) {
      var arr = [{ name: actor.name, money: actor.money, num: 1 }]; //数组
      var arrStr = JSON.stringify(arr); //转成字符串

      var gooShop = this.goShop;
      console.log(gooShop.length);
      // var brr = [];
      if (gooShop.length == 0) {
        gooShop.push(arrStr);
        localStorage.setItem("gShop", gooShop);
      }
      // else {
      //   for (var i = 0; i <= gooShop.length; i++) {
      //     if (gooShop[i].name == arr) {
      //       gooShop[i].num++;
      //       break;
      //     } else {
      //       gooShop.push(arrStr);
      //       localStorage.setItem("gShop", gooShop);
      //     }
      //   }
      // }
    }
  }
  // created() {
  //   if (window.localStorage.getItem("gShop") != null) {
  //     //获取本地存储数据
  //     this.goShop = JSON.parse(window.localStorage.getItem("gShop", "123"));
  //   }
  // }
};
</script>
<style scoped>
.header img {
  width: 30%;
}
.header p {
  font-size: 20px;
  font-weight: 900;
}
.header p span {
  font-size: 16px;
  font-weight: 100;
  color: blue;
}
.actor {
  display: flex;
  overflow-x: auto;
}
.actor img {
  width: 90px;
  height: 130px;
}
.actor li {
  width: 25vw;
  padding-right: 20px;
}
.Append {
  background: #409eff;
  border-radius: 3px;
  border: 1px solid #fff;
  color: #fff;
}
</style>