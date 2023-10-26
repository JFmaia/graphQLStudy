const post = async (_, { id }, { axios, urlBase }) => {
  const post = await axios.get(`${urlBase}posts/` + id);
  return post.data;
};

const posts = async (_, __, { axios, urlBase }) => {
  const posts = await axios.get(`${urlBase}posts`);
  return posts.data;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  // Criando um resolvers especifico atributo de post, ela será chamada para cada post
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
};
