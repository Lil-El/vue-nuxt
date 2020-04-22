export default context => {
  context.$axios.onRequest(config => {});
  context.$axios.onRequest(res => {
    if (res.status === 404) {
      return Promise.resolve({ name: "yxd" });
    }
    // context.redirect("/"); //重定向
  });
  context.$axios.onError(err => {
    return { name: "yxd" };
  });
};
