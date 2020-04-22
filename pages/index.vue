<template>
  <div class="container">Home :{{ name }}</div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  middleware: "page", //跳转到该页面时，执行page中间件
  head() {
    // 基于vue-meta，在页面级组件配置title等meta标签
    return {
      title: "Nuxt App"
    };
  },
  /**
   * 在服务端执行  通过服务端获取数据
   * 在客户端执行 会把结果合并到data上
   * 只能在页面组件才能用；不能在layout、component中写
   * fetch方法，不会返回结果，操作vuex
   */
  async asyncData(context) {
    //在服务端和客户端都执行
    let res = await context.$axios.get("xxx");
    return {
      name: res.name
    };
  },
  mounted() {
    //进度条要等加载完成后才能执行
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      });
    });
  }
};
</script>

<style></style>
