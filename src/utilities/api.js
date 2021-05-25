import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://samachara.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await baseApi.get('/topics');
  return data.topics;
};
