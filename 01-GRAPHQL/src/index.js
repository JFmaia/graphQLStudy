import { ApolloServer, gql } from 'apollo-server';
//Type content complexos
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String
    }
  `,
  // o ! na frente do type não deixa ser null e ele tem que existir
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'sfdhusfus',
          userName: 'José Flavio',
        };
      },
      users: () => {
        return [
          {
            id: 'sfdhusfus',
            userName: 'José Flavio',
          },
          {
            id: 'wser42423',
            userName: 'Matheus Dantas',
          },
          {
            id: 'wer324wdsrfwe',
            userName: 'José Maia',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
