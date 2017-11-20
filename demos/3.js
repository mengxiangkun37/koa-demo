const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'text';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = 'json';
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = 'html';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'text';
  }
};
app.use(main);
app.listen(3002);