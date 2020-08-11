<template>
  <div>
    <i class="huitui" @click="$router.go(-1)">返回上一步</i>
    <header class="headers">
      <router-link to="/Login"  tag="span">
        <i class="iconfont icon-xiaomi"></i>登录
      </router-link>
      <span>退出</span>
    </header>
    <section class="contents">
      <p>
        <i class="iconfont icon-dingdan">&nbsp;&nbsp;订单</i>
        <span>&gt;</span>
      </p>
      <p>
        <i class="iconfont icon-huiyuantequan">&nbsp;&nbsp;会员中心</i>
        <span>&gt;</span>
      </p>
      <p>
        <i class="iconfont icon-shouye">&nbsp;&nbsp;商城</i>
        <span>&gt;</span>
      </p>
      <p>
        <i class="iconfont icon-buoumaotubiao14">&nbsp;&nbsp;消息</i>
        <span>&gt;</span>
      </p>
    </section>
    <section class="banners"></section>
    <h2>说实话还不错哦，也不知道有没有可能啊</h2>
  </div>
</template>
<style  scoped>
@import "../styles/My.css";
</style>

