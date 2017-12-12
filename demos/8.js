const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) =>{
	console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
	next();
}
const main = ctx =>{
	ctx.response.body = 'hello 8js';
};

app.use(logger);
app.use(main);
app.listen(3002);