import {
  Avatar, Box, Button, Flex, Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import { createPostService } from '../services/posts.service';
import { useAuth } from '../contexts/auth.context';
import { useData } from '../contexts/data.context';

export function NewPost() {
  const [postText, setPostText] = useState('');
  const { authState } = useAuth();
  const { getAllPosts } = useData();
  const handleCreateNewPost = async () => {
    try {
      await createPostService({
        content: postText, token: authState.token,
      });
      getAllPosts();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box w="100%" h="auto">
      <Box p={5} h={250} w="full" marginTop="70px" bg="white">
        <Flex gap={5}>
          <Avatar size="md" name={`${authState.user.firstName} ${authState.user.lastName}`} src={authState?.user?.profileAvatar} />
          <Flex gap={7} flexGrow={1} flexDirection="column">
            <Textarea
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Write Something interesting..."
              _focus={{
                border: '2px',
                borderColor: 'purple.600',
              }}
              value={postText}
              bg="#E5E5E5"
              h={150}
            />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              fontSize="xl"
            >
              <Flex gap={10}>
                <GrIcons.GrGallery cursor="pointer" />
                <AiIcons.AiOutlineFileGif cursor="pointer" />
                <AiIcons.AiOutlineSmile cursor="pointer" />
              </Flex>
              <Button onClick={handleCreateNewPost} colorScheme="purple">
                Post this
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* <Flex justifyContent="flex-end" gap={10} marginTop={10}>
        <Button
          onClick={() => filteredPostsHandler(trendingPost, 'trending')}
        >
          Trending Post
        </Button>
        <Button
          onClick={() => filteredPostsHandler(sortByDate, 'sortByDate')}
        >
          New posts
        </Button>
      </Flex> */}
    </Box>
  );
}
