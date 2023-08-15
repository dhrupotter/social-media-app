import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NewPost } from './NewPost'
import { useAuth } from '../contexts/auth.context'
import { useData } from '../contexts/data.context'
import { UserPost } from './UserPost'

export const MainContainer = () => {
    const {dataState} = useData();
    const {authState} = useAuth();
    const posts = dataState.posts
    const users = dataState.users

    const loggedUser = users?.find(
        (eachUser) => eachUser.username === authState.user.username
      );
    
    const loggedUserFollowing = loggedUser?.following;

    
  return (
   <Flex width="50%" flexDirection="column">
    <NewPost  />
   {posts.map((post) => {
          return <UserPost post={post} />;
        })}
    
        </Flex>
  )
}

