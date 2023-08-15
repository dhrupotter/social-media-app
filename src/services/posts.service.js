import axios from 'axios';

const getAllPostsService = async () => {
  try {
    const res = await axios.get('/api/posts');
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const createPostService = async ({
  content, token,
}) => {
  try {
    const res = await axios.post(
      '/api/posts',
      { postData: { content, token } },
      { headers: { authorization: token } },
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

const editPostService = async ({
  encodedToken, image, imageAlt, post, input,
}) => {
  try {
    const res = await axios.post(`/api/posts/edit/${post._id}`, {
      content: input, image, imageAlt, username: user,
    }, { headers: { authorization: encodedToken } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const deletePostService = async ({ _id, encodedToken }) => {
  try {
    const res = await axios.delete(`/api/posts/${_id}`, encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const likePostService = async ({ _id, encodedToken }) => {
  try {
    const res = await axios.post(`/api/posts/like/${_id}`, {}, { headers: { authorization: encodedToken } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const dislikePostService = async ({ _id, encodedToken }) => {
  try {
    const res = await axios.post(`/api/posts/dislike/${_id}`, {}, { headers: { authorization: encodedToken } });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllPostsService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
};
