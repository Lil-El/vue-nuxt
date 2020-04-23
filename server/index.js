const Koa = require("koa");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const bodyparser = require("koa-bodyparser");
const session = require("koa-session");
const router = require("koa-router")();
const app = new Koa();

app.use(bodyparser());
app.keys = ["yxd secret"];
app.use(
  session(
    {
      key: "koa:sess",
      renew: false,
      maxAge: 8600000
    },
    app
  )
);
router.post("/denglu", async ctx => {
  let { name } = ctx.request.body;
  ctx.session.username = name;
  ctx.body = { username: name };
});
// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = app.env !== "production";

app.use(router.routes());
app.use(router.allowedMethods());

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  await nuxt.ready();
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    ctx.req.session = ctx.session; //添加session到req当中
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
