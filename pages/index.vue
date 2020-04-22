<template>
  <div class="container">Nuxt</div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head() {
    // 基于vue-meta，在页面级组件配置title等meta标签
    return {
      title: "App Index 111"
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
