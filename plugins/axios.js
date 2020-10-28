export default (context) => {
  // console.log(context); // 前后都执行-获取env环境变量
  // context.$axios.onRequest(config => {});
  context.$axios.onResponse((res) => {
    return Promise.resolve(res.data);

    // context.redirect("/"); //重定向
  });
  context.$axios.onError((err) => {
    return { name: "yxd" };
  });
};
