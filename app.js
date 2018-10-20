const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const bodyParser= require('koa-bodyparser');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
const router = new KoaRouter();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './client/build';


app.use(static(
  path.join( __dirname,staticPath)
))


// json prettier Middleware
app.use(json());

// app.use(async ctx => ctx.body={msg:'hello',name:'penny'});

router.get('/test',ctx => ctx.body={msg:'this is test page'});
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,() => console.log("Server start..."));