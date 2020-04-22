<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/detail">Detail</nuxt-link>
    <nuxt-link to="/detail/5">Detail/5</nuxt-link>
    <nuxt-link to="/user/5/yxd">User/5/yxd</nuxt-link>
    <!-- <router-view /> -->
    <nuxt />
  </div>
</template>
<script>
export default {
  middleware: "layout" //跳转到这个layout时，执行layout的中间件
};
</script>
<style></style>
