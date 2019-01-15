const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
// TODO: Mettre à jour le schema avec des utilisateurs
const schema = buildSchema(`
  type Query {
    random: Float!
    hello: String
    user: User
  }

  type User {
    name: String
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
  })

  //TODO: ajouter la méthod pour renvoyer les utilisateurs
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');