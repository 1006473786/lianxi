<template>
  <div>
    <button onclick="localStorage.clear()">清空localStorage</button>
    <span>今天你最美</span>
    <div class="header">
      <div>
        <img
          class="img001"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059703124&di=5506aefe7e3026eebbaa1ea7aaa799f0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F04%2F20160604214826_ZkVwT.jpeg"
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
          <span>价格：{{ actor.money }}元</span>
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
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059427150&di=9f6ee8a83f6ae605afc86c2510894dfd&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FIkfznS%3DfiYcI1%3DmuNPycADYQ9f%3DWfZ9JW%3D55oH1DCRNyb1541249741095compressflag.jpg",
          name: "幂幂01",
          money: "10",
          total: 10,
        },
        {
          id: 2,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059461092&di=b0a4fee7f00365bba11e02b02d41f14e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F720%2Fw1920h1200%2F20190115%2FxYzn-hrsechc3042562.jpg",
          name: "幂幂02",
          money: "9",
          total: 10,
        },
        {
          id: 3,
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2575254467,4092986695&fm=26&gp=0.jpg",
          name: "幂幂03",
          money: "8",
          total: 10,
        },
        {
          id: 4,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059295297&di=e2c1b50be5e58e6b2b2970304db63e99&imgtype=0&src=http%3A%2F%2Fimgs.focus.cn%2Fupload%2Fnews%2F7388%2Fa_73873295.jpg",
          name: "幂幂04",
          money: "7",
          total: 10,
        },
        {
          id: 5,
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2069552050,621735712&fm=26&gp=0.jpg",
          name: "幂幂05",
          money: "10",
          total: 10,
        },
      ],
    };
  },
  created() {
    if (localStorage.cardData) {
      // 如果不等于空
      this.goShop = JSON.parse(localStorage.cardData);
    }
  },
  methods: {
    setItem() {
      localStorage.setItem("cardData", JSON.stringify(this.goShop));
    },
    // getItem() {
    //   localStorage.getItem("cardData");
    // },
    Append(actor) {
      if (this.goShop.length == 0) {
        var arr = {
          id: actor.id,
          name: actor.name,
          num: 1,
          money: actor.money,
          total: actor.total,
        }; //数组
        this.goShop.push(arr);
        this.setItem();
      } else {
        var flag = true;
        console.log(this.goShop);
        for (let i = 0; i < this.goShop.length; i++) {
          if (this.goShop[i].id == actor.id) {
            this.goShop[i].num++;
            this.goShop[i].total = this.goShop[i].num * this.goShop[i].money;
            this.setItem();
            flag = false;
            break;
          }
        }
        if (flag) {
          this.goShop.push({
            id: actor.id,
            name: actor.name,
            num: 1,
            money: actor.money,
            total: actor.total,
          });
          this.setItem();
        }
      }
    },
  },
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