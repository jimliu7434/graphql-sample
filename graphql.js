const Router = require('koa-router');
const { graphqlKoa } = require('apollo-server-koa');
const router = new Router();

// GraphQL
const schema1 = require('./scheme1');
const schema2 = require('./scheme2');
//const { graphql } = require('graphql');

router.post('/schema1', graphqlKoa({ schema: schema1 }));
router.post('/schema2', graphqlKoa({ schema: schema2 }));

//router.post('/', ctx => {
    // graphql(schema, ctx.request.body)
    //     .then((result) => {
    //         ctx.body = JSON.stringify(result, null, 2);
    //         ctx.status = 200;
    //     })
    //     .catch((error) => {
    //         ctx.status = 500;
    //     });
//});

module.exports = router;
