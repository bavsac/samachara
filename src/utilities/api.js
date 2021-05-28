import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://samachara.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await baseApi.get('/topics');
  return data.topics;
};

export const getArticles = async (topic, { sortBy, orderIn }) => {
  let path = '/articles';

  const { data } = await baseApi.get(path, {
    params: {
      topic: topic,
      sort_by: sortBy,
      order_by: orderIn
    }
  });

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

export const postComment = async (article_id, { username, body }) => {
  const { data } = await baseApi.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
  return data.comment;
};

export const deleteById = async ({ article_id, comment_id }) => {
  let path;
  if (comment_id) {
    path = `/comments/${comment_id}`;
  } else {
    path = `/articles/${article_id}`;
  }
  const { data } = await baseApi.delete(path);

  return comment_id ? data.comment : data.article;
};

export const patchById = async ({ comment_id }) => {
  console.log('patching');
};
