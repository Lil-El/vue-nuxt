<template>
  <div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/detail">Detail</nuxt-link>
      <nuxt-link to="/detail/5">Detail/5</nuxt-link>
      <nuxt-link to="/user/5/yxd">User/5/yxd</nuxt-link>
    </div>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/profile">个人中心</el-menu-item>
      </el-menu>
      <ul>
        <li><nuxt-link to="/login">登录</nuxt-link></li>
        <li><nuxt-link to="/logout">退出</nuxt-link></li>
      </ul>
    </el-header>
    <el-main><nuxt /></el-main>
    <el-footer>footer</el-footer>
  </div>
</template>
<script>
export default {
  middleware: "layout", //跳转到这个layout时，执行layout的中间件
  data() {
    return {
      activeIndex: "/"
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.el-main {
  min-height: calc(100vh - 141px);
}
.el-footer {
  background-color: #000;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
ul {
  display: inline-block;
}
</style>
