const Koa= require('koa');
const app = new Koa();

const main = ctx => {
  if(ctx.request.path !== '/'){
    ctx.response.type ='html';
    ctx.response.body = '<a href="/">hahah</a>'
  }else {
    ctx.response.body = 'hello';
  }
}
app.use(main);
app.listen(3002);
