import {
  Avatar,
  Box, Button, Flex, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

export default function LeftSidebar() {
  const { authState } = useAuth();
  return (
    <Box p={20} w="25%" h="auto">
      <Flex
        pos="sticky"
        top={10}
        h={530}
        fontSize={20}
        flexDirection="column"
        gap={8}
        w={260}
      >
        <Flex alignItems="center" gap={10}>
          <AiIcons.AiOutlineHome />
          <Link to="/home">
            <Text fontWeight="bold">Home</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <IoIcons.IoRocketOutline />
          <Link to="/explore">
            <Text fontWeight="bold">Explore</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <BsIcons.BsBookmarkStar />
          <Link to="/bookmarks">
            <Text fontWeight="bold">Bookmarks</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <BsIcons.BsBell />
          <Text fontWeight="bold">Notifications</Text>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <AiIcons.AiOutlineUser />

          <Text
            fontWeight="bold"
            cursor="pointer"
          >
            Profile
          </Text>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <Button
            w="full"
            bg="var(--primary-color)"
            color="var(--text-primary-color)"
            _hover={{ bg: 'var(--secondary-color)', color: 'var(--text-primary-color)' }}
          >
            Create Post
          </Button>
        </Flex>
      </Flex>

      <Flex
        pos="sticky"
        bottom="0"
        top={600}
        w={260}
        gap={4}
        cursor="pointer"
        alignItems="start"
      >
        <Avatar size="md" name={`${authState.user.firstName} ${authState.user.lastName}`} src={authState.user.profileAvatar} />
        <Flex justifyContent="flex-start" flexDirection="column">
          <Heading size="sm" color="var(--primary-color)">
            {`${authState.user.firstName} ${authState.user.lastName}`}
          </Heading>
          <Text color="var(--text-secondary-color)" fontSize="sm">
            {authState.user.username}
          </Text>
        </Flex>
        <Flex
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          gap={10}
          cursor="pointer"
        >
          <BsIcons.BsThreeDots />
        </Flex>
      </Flex>
    </Box>
  );
}
