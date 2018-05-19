const Koa = require('koa');
const Logger = require('koa-logger');
const Bodyparser = require('koa-bodyparser');
const router = new (require('koa-router'));
const graphqlrt = new (require('./graphql'));
const app = new Koa();
const port = 8080;

app.use(Logger());      // add logger to koa
app.use(Bodyparser.text({
    type: 'application/graphql'
}));  // add body-parser to koa


router.use('/graphql', graphqlrt.routes());
app.use(router.routes());

app.listen(port, () => {
    const host = app.address().address;
    const port = app.address().port;
    console.log(`Graphql is listening at http://${host}:${port}`);
});