const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
require('dotenv').config();

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
    console.log(`
        Server is running!
        Listening on port 4000
        Explore at https://studio.apollographql.com/dev
    `);
});
