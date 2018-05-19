const Koa = require('koa');
const Logger = require('koa-logger');
const Bodyparser = require('koa-bodyparser');
const router = new (require('koa-router'));
const graphqlrt = require('./graphql');
const app = new Koa();
const port = 8080;

app.use(Logger());      // add logger to koa
app.use(Bodyparser());  // add body-parser to koa


router.use('/graphql', graphqlrt.routes());
app.use(router.routes());

app.listen(port, () => {
    console.log(`Graphql is listening at ${port}`);
});
