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
  const { authState } = useAuth();
  const { users } = dataState;

  console.log(users);

  const handleFollowUser = async (followUserId) => {
    await followUserService({ followUserId, encodedToken: authState.token });
    getAllUsers();
  };

  const handleUnFollowUser = async (followUserId) => {
    await unfollowUserService({ followUserId, encodedToken: authState.token });
    getAllUsers();
  };

  // const currentUser = users?.find(
  //   (each) => each?.username === userInfo?.username
  // );

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
              name="Ryan Florence"
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
                  onClick={() => handleUnFollowUser(item._id)}
                  fontWeight="bold"
                  color="purple.600"
                >
                  UnFollow
                </Text>
                ) : (
                  <Text
                    onClick={() => handleFollowUser(item._id)}
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
