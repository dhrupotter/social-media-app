/* eslint-disable no-unused-vars */
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { NewPost } from './NewPost';
import { useAuth } from '../contexts/auth.context';
import { useData } from '../contexts/data.context';
import { UserPost } from './UserPost';

export function MainContainer() {
  const { dataState } = useData();
  const { authState } = useAuth();
  const { posts } = dataState;
  const { users } = dataState;

  const loggedUser = users?.find(
    (eachUser) => eachUser.username === authState.user.username,
  );

  const loggedUserFollowing = loggedUser?.following;

  return (
    <Flex width="50%" flexDirection="column">
      <NewPost />
      {posts.map((post) => <UserPost post={post} />)}

    </Flex>
  );
}
