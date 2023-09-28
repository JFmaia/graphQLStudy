import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      heigth: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  // o ! na frente do type não deixa ser null e ele tem que existir
  resolvers: {
    Query: {
      id: () => '131iswjd2321',
      name: () => {
        return 'José Maia';
      },
      age: () => 23,
      heigth: () => 86.33,
      married: () => false,
      arrayString: () => ['Pikles', 'Repolho'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
