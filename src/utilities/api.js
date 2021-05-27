import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://samachara.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await baseApi.get('/topics');
  return data.topics;
};

export const getArticles = async (topic) => {
  let path = '/articles';
  if (topic) {
    path += `?topic=${topic}`;
  }
  const { data } = await baseApi.get(path);
  console.log(data.articles);
  return data.articles;
};

export const getArticleById = async (id) => {
  const path = `/articles/${id}`;
  const { data } = await baseApi.get(path);

  return data.article;
};

export const getCommentsByArticleId = async (id) => {
  const path = `/articles/${id}/comments`;
  const { data } = await baseApi.get(path);
  console.log(data.comments);
  return data.comments;
};

export const patchVotesById = async (
  { article_id, comment_id },
  numberOfVotes
) => {
  let path;
  if (article_id) {
    path = `/articles/${article_id}`;
  }
  if (comment_id) {
    path = `/comments/${comment_id}`;
  }
  const { data } = await baseApi.patch(path, {
    inc_votes: numberOfVotes
  });
  return article_id ? data.article : data.comment;
};

export const getUsers = async () => {
  const { data } = await baseApi.get('/users');
  return data.users;
};
