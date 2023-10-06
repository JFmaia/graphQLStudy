import axios from 'axios';

export const context = () => {
  return {
    axios,
    urlBase: 'http://localhost:3000/',
  };
};
