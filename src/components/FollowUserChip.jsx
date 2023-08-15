import {
  Avatar, Flex, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../contexts/data.context';
import { useAuth } from '../contexts/auth.context';
import { followUserService, unfollowUserService } from '../services/users.service';

export function FollowUserChip() {
  const navigate = useNavigate();
  const { dataState, getAllUsers } = useData();
  const { authState, authDispatch } = useAuth();
  const { users } = dataState;

  const handleFollowUser = async (followUser) => {
    await followUserService({ followUserId: followUser._id, encodedToken: authState.token });
    authDispatch({ type: 'setUser', payload: { ...authState.user, following: [...authState.user.following, followUser] } });
    getAllUsers();
  };

  const handleUnFollowUser = async (followUser) => {
    await unfollowUserService({ followUser: followUser._id, encodedToken: authState.token });
    getAllUsers();
    authDispatch({ type: 'setUser', payload: { ...authState.user, following: authState.user.following.filter((user) => user._id !== followUser._id) } });
  };

  const allUsers = users?.filter(
    (eachUser) => eachUser.username !== authState.user.username,
  );

  return (
    <div>
      {allUsers?.map((item) => (
        <div key={item._id}>
          <Flex marginBottom={4} w={260} gap={4} cursor="pointer">
            <Avatar
              onClick={() => navigate(`/profile/${item.username}`)}
              size="md"
              name={item.firstName}
              src={item.avatar}
            />
            <Flex justifyContent="flex-start" flexDirection="column">
              <Heading size="sm">
                {' '}
                {item.firstName}
                {' '}
              </Heading>
              <Text color="gray.500" fontSize="sm">
                @
                {item.username}
              </Text>
            </Flex>
            <Flex
              flexGrow={1}
              justifyContent="flex-end"
              alignItems="center"
              gap={10}
              cursor="pointer"
            >
              {authState.user.following.find(
                (userInfo) => userInfo.username === item.username,
              ) ? (
                <Text
                  onClick={() => handleUnFollowUser(item)}
                  fontWeight="bold"
                  color="purple.600"
                >
                  UnFollow
                </Text>
                ) : (
                  <Text
                    onClick={() => handleFollowUser(item)}
                    fontWeight="bold"
                    color="purple.600"
                  >
                    Follow +
                  </Text>
                )}
            </Flex>
          </Flex>
        </div>
      ))}
    </div>
  );
}
