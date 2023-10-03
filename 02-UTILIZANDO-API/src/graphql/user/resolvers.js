export const userResolvers = {
  Query: {
    user: () => {
      return {
        id: '1',
        userName: 'José Flávio',
      };
    },
    users: () => {
      return [
        {
          id: '1',
          userName: 'José Flávio',
        },
        {
          id: '2',
          userName: 'Lavinia Kaylane',
        },
        {
          id: '1',
          userName: 'José Marcos',
        },
      ];
    },
  },
};
