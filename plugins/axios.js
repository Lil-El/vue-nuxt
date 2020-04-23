export default context => {
  // context.$axios.onRequest(config => {});
  context.$axios.onResponse(res => {
    return Promise.resolve(res.data);

    // context.redirect("/"); //重定向
  });
  context.$axios.onError(err => {
    return { name: "yxd" };
  });
};
