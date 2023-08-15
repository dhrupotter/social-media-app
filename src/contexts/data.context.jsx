import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import DataReducer from '../reducers/DataReducer';
import { useAuth } from './auth.context';
import { getAllUsersService } from '../services/users.service';
import { getAllPostsService } from '../services/posts.service';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const {
    authState: { token },
  } = useAuth();
  const initialDataState = {
    users: [],
    posts: [],
    bookmarks: [],
    activeFilter: 'Latest',
  };
  const [dataState, dataDispatch] = useReducer(DataReducer, initialDataState);
  const [isPostsLoading, setPostsLoading] = useState(true);
  const [isUsersLoading, setUsersLoading] = useState(true);

  const getAllUsers = async () => {
    try {
      const res = await getAllUsersService();
      const jsonRes = await res.json();
      if (res.status === 200) {
        dataDispatch({ type: 'setUsers', payload: jsonRes?.users });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setUsersLoading(false);
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await getAllPostsService();
      if (res.status === 200) {
        dataDispatch({ type: 'setPosts', payload: res?.data.posts });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
    getAllPosts();
  }, []);

  // useEffect(() => {
  //   getBookmarks(token, dataDispatch);
  // }, [token]);

  return (
    <DataContext.Provider
      value={{
        dataState, dataDispatch, isPostsLoading, isUsersLoading, getAllPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
