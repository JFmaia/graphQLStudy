const post = async (_, { id }, { axios, urlBase }) => {
  const response = await axios.get(`${urlBase}posts/` + id);
  const post = await response.data;

  // Verificando se teve erro e dando statuscode e message
  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found!',
    };
  }
  return post;
};

const posts = async (_, { input }, { axios, urlBase }) => {
  //adicionando filtros opcionais
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await axios.get(`${urlBase}posts/?${apiFiltersInput}`);
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
  // Tratativa de error
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
};
