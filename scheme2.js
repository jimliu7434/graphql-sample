const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const ReservationList = [
    {
        time: '20180101',
        place: 'taipei',
        user: {
            name: 'jim',
            gender: 'male',
        },
    },
    {
        time: '20180102',
        place: 'taichung',
        user: {
            name: 'jim',
            gender: 'male',
        },
    },
];

let typeDefs = `
    type User {
        name: String
        gender: String
    }

    type Reservation {
        time: String!
        place: String!
        user: User!
    }

    # Must have Query
    type Query {
        reservations(time:String!): [Reservation]
    }
`;

let resolvers = {
    Query: {
        reservations: (_, { time }) => {
            return ReservationList.filter(r => r.time <= time);
        }
    },
}

const schema = makeExecutableSchema({ typeDefs, resolvers, });




module.exports = schema;
