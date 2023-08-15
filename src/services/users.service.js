import axios from 'axios';

const getAllUsersService = async () => {
  try {
    const res = await axios.get('/api/users');
    return res;
  } catch (err) {
    console.log(err);
  }
};

const updateProfileService = async ({ editInput, encodedToken }) => {
  try {
    const res = await axios.post('/api/users/edit', editInput, encodedToken);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const getBookmarkService = async (encodedToken) => {
  try {
    const res = await axios.get('/api/users/bookmark/', encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const addBookmarkService = async ({ _id, encodedToken }) => {
  try {
    const res = await axios.post(`/api/users/bookmark/${_id}`, encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const removeBookmarkService = async ({ _id, encodedToken }) => {
  try {
    const res = await axios.post(`/api/users/remove-bookmark/${_id}`, encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const followUserService = async ({ followUserId, encodedToken }) => {
  try {
    const res = await axios.post(`/api/users/follow/${followUserId}`, encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const unfollowUserService = async ({ followUserId, encodedToken }) => {
  try {
    const res = await axios.post(`/api/users/unfollow/${followUserId}`, encodedToken);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllUsersService,
  updateProfileService,
  getBookmarkService,
  addBookmarkService,
  removeBookmarkService,
  followUserService,
  unfollowUserService,
};
