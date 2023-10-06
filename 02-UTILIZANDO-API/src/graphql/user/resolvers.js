const users = async (_, __, { axios, urlBase }) => {
  const users = await axios.get(`${urlBase}users`);
  return users.data;
};

const user = async (_, { id }, { axios, urlBase }) => {
  const user = await axios.get(`${urlBase}users/` + id);
  return user.data;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
