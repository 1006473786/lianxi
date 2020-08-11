<template>
  <div class="loveToo">
    <div class="loveTooTitle">
      <p>
        <span @click="num=0" >猜你喜欢</span>
        <span @click="num=1">严选车</span>
        <span @click="num=2">超值车源</span>
      </p>
      <i class="iconfont icon-triangle-up"></i>
    </div>
 
    <ul v-show="num==0">
      <li>
        <img src="../../assets/images/car.jpg" alt="">
        <div class="loveLiR">
          <h4>AAA长安CS75 2014款 1.8T 自动精英型</h4>
          <p>2015年/7.8万公里</p>
          <p><strong>8.20万</strong>新车价<span>14.70万</span></p>
        </div>
      </li>
    </ul>
    <ul v-show="num==1">
      <li>
        <img src="../../assets/images/car1.jpg" alt="">
        <div class="loveLiR">
          <h4>BBB长安CS75 2014款 1.8T 自动精英型</h4>
          <p>2015年/7.8万公里</p>
          <p><strong>8.20万</strong>新车价<span>14.70万</span></p>
        </div>
      </li>
    </ul>
    <ul v-show="num==2">
      <li>
        <img src="../../assets/images/car2.jpg" alt="">
        <div class="loveLiR">
          <h4>CCC长安CS75 2014款 1.8T 自动精英型</h4>
          <p>2015年/7.8万公里</p>
          <p><strong>8.20万</strong>新车价<span>14.70万</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
    export default {
      name: "CarsLoveToo",
      // components: {CarsLoveTooList},
      data:function(){
        return{
          num:0,
        }
      },
      methods:{
        dosomething(){
 
        }
      }
    }
</script>
 
<style lang="scss" scoped>
  .loveToo{
    .loveTooTitle {
      position: relative;
      border-bottom: 4px solid #dfdfdf;
      p{
      display: flex;
      justify-content: space-around;
      padding: .23rem 0;
      span{
        font-size: .18rem;
      }
    }
      .iconfont{
        font-size: .15rem;
        color: #dfdfdf;
        position: absolute;
        left: .58rem;
        bottom: -6px;
      }
    }
    ul{
      padding: .2rem .3rem .2rem .2rem;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .18rem 0;
        border-bottom: 1px solid #dfdfdf;
        img{
          width: 36%;
          padding-right: .15rem;
        }
        .loveLiR{
          font-size: .11rem;
          color: #969da6;
          h4{
            font-size: .14rem;
            color: #000;
          }
          p{
            font-size: .14rem;
            color: #bebebe;
          }
          p:last-of-type{
            strong{
              color: red;
            }
            span{
              font-size: .11rem;
              color: #bebebe;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
</style>