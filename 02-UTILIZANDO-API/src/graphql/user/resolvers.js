const users = async (_, { input }, { axios, urlBase }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await axios.get(`${urlBase}users/?${apiFiltersInput}`);
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
