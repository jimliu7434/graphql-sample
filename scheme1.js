const { buildSchema } = require('graphql');


let schema = buildSchema(`
    type Query {
        postTitle: String,
        blogTitle: String
    }
`);

module.exports = schema;