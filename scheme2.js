const { buildSchema } = require('graphql');


let schema = buildSchema(`
    type Query {
        postTitle: String,
        newsTitle: String
    }
`);

module.exports = schema;