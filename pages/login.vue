<template>
  <div>
    <div>login</div>
    <div>
      username:
      <input type="text" v-model="username" />
      <button @click="submit">submit</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    async submit() {
      let { username } = await this.$axios.post(
        "http://127.0.0.1:3000/denglu",
        {
          name: this.username
        }
      );
      if (username) {
        window.location.href = "/"; // 走服务端渲染，执行nuxtServerInit，将用户名存入到store中
      }
    }
  }
};
</script>
