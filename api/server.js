const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const { usersGenerator } = require('./dataGenerator');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    random: Float!
    hello: String
    user: User,
    users: [User]
  }

  type User {
    name: String,
    email: String,
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
  random: () => {
    return Math.random();
  },
  user: () => ({
    name: 'damn',
  }),
  users: () => ([...usersGenerator()])
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');