module.exports = {
  env: {
    baseUrl: process.env.NODE_ENV === "production" ? "localhost" : "/"
  },
  mode: "universal", //普通模式，seo
  /*
   ** Headers of the page
   */
  head: {
    // vue-meta
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#f00" },
  /*
   ** Global CSS
   配置全局css
   */
  css: ["assets/css/common.css", "element-ui/lib/theme-chalk/index.css"],
  router: {
    middleware: "router" //路由跳转都会执行router的中间件
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/axios", "@/plugins/elementui"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
