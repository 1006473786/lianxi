<template>
  <div class="inputs">
    <div class="enter logins" v-show="isShow">
      <h1>请登录</h1>
      <input type="text" placeholder="请输入账号" />
      <input type="password" placeholder="请输入密码" />
      <input type="text" placeholder="请输入验证码" />
      <input type="submit" placeholder="提交" />
      <button>忘记密码</button>
      <button @click="login">没有账户，注册账户</button>
    </div>

    <div class="login logins" v-show="isShow2">
      <h1>请注册</h1>
      <input type="text" placeholder="请输入手机号" />
      <input type="text" placeholder="输入验证码" />
      <input type="password" placeholder="密码" />
      <input @click="sub" type="submit" placeholder="提交" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      isShow2: false,
    };
  },
  methods: {
    login() {
      this.isShow = !this.isShow;
      this.isShow2 = !this.isShow2;
    },
    sub() {
      this.isShow = !this.isShow;
      this.isShow2 = !this.isShow2;
    },
  },
};
</script>
<style>
</style>
<style lang="postcss" scoped>
@import "../styles/Login.css";
</style>