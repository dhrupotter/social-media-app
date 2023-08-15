import { toast } from 'react-toastify';
import {
  addBookmarkService,
  followUserService,
  getBookmarkService,
  removeBookmarkService,
  unfollowUserService,
  updateProfileService,
} from '../services/users.service';

const getBookmarks = async (token, dataDispatch) => {
  try {
    const res = await getBookmarkService(token);
    if (res.status === 200) {
      dataDispatch({ type: 'setBookmarks', payload: res?.bookmarks });
    }
  } catch (err) {
    console.log(err);
  }
};

const addBookmark = async ({ _id, token, dataDispatch }) => {
  try {
    const res = await addBookmarkService({ _id, encodedToken: token });
    if (res.status === 200) {
      dataDispatch({ type: 'setBookmarks', payload: res?.data.bookmarks });
      toast.success('Post bookmarked!');
    }
  } catch (err) {
    console.log(err);
    toast.error('Failed to bookmark post');
  }
};
const removeBookmark = async ({ _id, token, dataDispatch }) => {
  try {
    const res = await removeBookmarkService({ _id, encodedToken: token });
    if (res.status === 200) {
      dataDispatch({ type: 'setBookmarks', payload: res?.data.bookmarks });
      toast.success('Post removed from bookmarks!');
    }
  } catch (err) {
    console.log(err);
    toast.error('Failed to remove post from bookmarks');
  }
};

const followUser = async ({
  followUserId, token, dataDispatch, users,
}) => {
  try {
    const res = await followUserService({ followUserId, token });
    if (res.status === 200) {
      const newUsers = users.map((user) => {
        if (user?.username === res?.user?.username) {
          return jsonRes?.user;
        } if (user?.username === res?.followUser?.username) {
          return res?.followUser;
        }
        return user;
      });
      dataDispatch({ type: 'setUsers', payload: newUsers });
      toast.success(`Started following ${res?.followUser?.firstName}`);
    }
  } catch (err) {
    console.log(err);
    toast.error('An error occurred. Please try again.');
  }
};

const unfollowUser = async ({
  followUserId, token, dataDispatch, users,
}) => {
  try {
    const res = await unfollowUserService({ followUserId, token });
    if (res.status === 200) {
      const newUsers = users.map((user) => {
        if (user?.username === res?.user?.username) {
          return res?.user;
        } if (user?.username === res?.followUser?.username) {
          return res?.followUser;
        }
        return user;
      });
      dataDispatch({ type: 'setUsers', payload: newUsers });
      toast.success(`Unfollow ${res?.followUser?.firstName}`);
    }
  } catch (err) {
    console.log(err);
    toast.error('An error occurred. Please try again.');
  }
};

const updateProfile = async ({
  editInput,
  token,
  authDispatch,
  dataDispatch,
  users,
  setProfileBtnDisabled,
  toastId,
}) => {
  try {
    const res = await updateProfileService({ editInput, token });
    if (res.status === 201) {
      localStorage.setItem('user', JSON.stringify(res?.user));
      authDispatch({ type: 'setUser', payload: res?.user });
      const newUsers = users.map((user) => {
        if (user?.username === res?.user?.username) {
          return res?.user;
        }
        return user;
      });
      dataDispatch({ type: 'setUsers', payload: newUsers });
      toast.update(toastId, {
        render: 'Profile Updated.',
        type: 'success',
        isLoading: false,
        autoClose: 500,
      });
    }
  } catch (err) {
    console.log(err);
    toast.update(toastId, {
      render: 'Profile Update failed.',
      type: 'success',
      isLoading: false,
      autoClose: 500,
    });
  } finally {
    setProfileBtnDisabled(false);
  }
};

export {
  getBookmarks,
  addBookmark,
  removeBookmark,
  followUser,
  unfollowUser,
  updateProfile,
};
