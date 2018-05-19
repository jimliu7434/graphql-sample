const Router = require('koa-router');
const { graphqlKoa, graphiqlKoa, } = require('apollo-server-koa');
const router = new Router();

// GraphQL
const schema1 = require('./scheme1');
const schema2 = require('./scheme2');

router.post('/schema1', graphqlKoa({ schema: schema1 }));
router.post('/schema2', graphqlKoa({ schema: schema2 }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql/schema2' }));


module.exports = router;
