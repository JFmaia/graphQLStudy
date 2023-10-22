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
};
