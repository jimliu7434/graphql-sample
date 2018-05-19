const Router = require('koa-router');
const router = new Router();

// GraphQL
const schema = require('./scheme/scheme');
const graphql = require('graphql');

router.put('/', ctx => {
    graphql(schema, ctx.request.body, )
        .then((result) => {
            ctx.body = JSON.stringify(result, null, 2);
            ctx.status = 200;
        })
        .catch((error) => {
            ctx.status = 500;
        });
});

module.exports = router;
