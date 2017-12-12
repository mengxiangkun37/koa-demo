const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	console.log(`${Date.now()} ${ctx.request.url}`);
	ctx.response.body = 'hello haha';
};

app.use(main);
app.listen(3000);