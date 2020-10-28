<template>
  <el-container style="height: 100%">
    <el-header class="header">
      <el-menu>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/profile">个人中心</el-menu-item>
        <el-menu-item><nuxt-link to="/login">登录</nuxt-link></el-menu-item>
        <el-menu-item><nuxt-link to="/logout">退出</nuxt-link></el-menu-item>
      </el-menu>
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>MINO</span>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>导航2
            </template>
            <el-menu-item index="2-1"
              ><nuxt-link to="/">Home</nuxt-link></el-menu-item
            >
            <el-menu-item index="2-2"
              ><nuxt-link to="/detail">detail</nuxt-link></el-menu-item
            >
            <el-menu-item index="2-3"
              ><nuxt-link to="/detail/5">detail/5</nuxt-link></el-menu-item
            >
            <el-menu-item index="2-4">
              <nuxt-link to="/detail/5/yxd">detail/5/yxd</nuxt-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <h3>布局演示</h3>
        <!-- nuxt 相当于路由，nuxt.js 会编译别的页面插入此处 -->
        <nuxt />
      </el-main>
    </el-container>
    <el-footer>FOOTER</el-footer>
  </el-container>
</template>
<script>
export default {
  middleware: "layout", //跳转到这个layout时，执行layout的中间件
  data() {
    return {
      activeIndex: "/",
    };
  },
};
</script>
<style>
html,
body,
#__nuxt,
#__layout,
#__layout {
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-size: "12px";
  color: white;
  background: black;
  cursor: default;
}
.el-icon-setting {
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-right: 14px;
}

.el-footer {
  background-color: #000;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
</style>
