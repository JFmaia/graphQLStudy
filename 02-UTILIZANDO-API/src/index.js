import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import axios from 'axios';
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      axios,
      urlBase: 'http://localhost:3000/',
    };
  },
});

server.listen(4004).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
