export const postResolvers = {
  Query: {
    post: () => {
      return {
        id: 'ahddjah2344j',
        title: 'Tudo vai acabar amanhã!!',
      };
    },
    posts: () => {
      return [
        {
          id: 'ahddjah2344j',
          title: 'Tudo vai acabar amanhã!!',
        },
        {
          id: 'ahddjah2444j',
          title: 'Coneça murilo o menino mais forte do mundo!!',
        },
        {
          id: 'ahddjah2374j',
          title: 'Tudo vai acabar amanhã as 9:00!!',
        },
      ];
    },
  },
};
