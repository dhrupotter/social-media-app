/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-shadow */
import {
  Avatar, Box, Flex, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
// import * as VsIcons from 'react-icons/vsc';
import * as SiIcons from 'react-icons/si';
import { useAuth } from '../contexts/auth.context';
import { dislikePostService, likePostService } from '../services/posts.service';
import { useData } from '../contexts/data.context';
import { addBookmark, removeBookmark } from '../utils/userUtils';

export function UserPost({ post }) {
  const { authState } = useAuth();
  const { getAllPosts, dataDispatch, dataState } = useData();
  const { user } = authState;
  const { bookmarks } = dataState;
  const navigate = useNavigate();

  const bookmarkByUser = (selectedPostId) => (
    bookmarks?.filter((bookmark) => bookmark._id === selectedPostId)
      .length !== 0
  );

  const bookmarkHandler = async (postId) => {
    if (bookmarkByUser(postId)) {
      removeBookmark({ _id: postId, token: authState.token, dataDispatch });
    } else {
      addBookmark({ _id: postId, token: authState.token, dataDispatch });
    }
  };

  const likeByUser = (selectedPost) => (
    selectedPost.likes.likedBy?.filter(
      (users) => users.username === user.username,
    ).length !== 0
  );

  const likeHandler = async (post) => {
    if (likeByUser(post)) {
      await dislikePostService({ _id: post._id, encodedToken: authState.token });
      getAllPosts();
    } else {
      await likePostService({ _id: post._id, encodedToken: authState.token });
      getAllPosts();
    }
  };

  return (
    <div key={post._id}>
      <Box h="auto" p={5} marginTop="20px" bg="white">
        <Flex gap={5}>
          <Avatar
            onClick={() => navigate(`/profile/${post.username}`)}
            size="md"
            name={post.username}
            src={post.avatar}
            cursor="pointer"
          />
          <Flex
            justifyContent="space-between"
            gap={4}
            flexGrow={1}
            flexDirection="column"
          >
            <Flex gap={2} alignItems="center">
              <Heading
                onClick={() => navigate(`/profile/${post.username}`)}
                size="sm"
                cursor="pointer"
              >
                {post.username}
              </Heading>
              <Text
                onClick={() => navigate(`/profile/${post.username}`)}
                color="gray.500"
                cursor="pointer"
              >
                @
                {' '}
                {post.username}
              </Text>
            </Flex>
            <Text textAlign="initial">{post.content}</Text>
            <Flex justifyContent="space-between" fontSize="xl" gap={10}>
              <Flex gap={3} alignItems="center">
                {likeByUser(post) ? (
                  <AiIcons.AiFillHeart
                    fill="red"
                    onClick={() => likeHandler(post)}
                    cursor="pointer"
                  />
                ) : (
                  <AiIcons.AiOutlineHeart
                    onClick={() => likeHandler(post)}
                    cursor="pointer"
                  />
                )}

                <Box fontSize={15}>
                  {' '}
                  {post.likes.likeCount}
                  {' '}
                </Box>
              </Flex>
              {/* <VsIcons.VscComment onClick={onOpen} cursor="pointer" /> */}
              {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add comment</ModalHeader>

                  <ModalCloseButton />
                  <ModalBody>
                    <Textarea
                      onChange={commentTextHandler}
                      _focus={{
                        border: "2px",
                        borderColor: "var(--primary-color)",
                      }}
                      placeholder="Start Typing...."
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      mr={3}
                      onClick={() => createNewCommentHandler(post)}
                    >
                      Comment
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}

              <AiIcons.AiOutlineShareAlt cursor="pointer" />

              {bookmarkByUser(post._id) ? (
                <BsIcons.BsFillBookmarkCheckFill
                  onClick={() => bookmarkHandler(post._id)}
                  cursor="pointer"
                />
              ) : (
                <BsIcons.BsBookmarkStar
                  onClick={() => bookmarkHandler(post._id)}
                  cursor="pointer"
                />
              )}
              {post.username === 'aron20' ? (
                <>
                  {/* <Menu>
                    <MenuButton>
                      <BsIcons.BsThreeDotsVertical cursor="pointer" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          onEditOpen();
                          setEditPostInput(post.content);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <Modal isOpen={isEditOpen} onClose={onEditClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Edit post</ModalHeader>

                          <ModalCloseButton />
                          <ModalBody>
                            <Textarea
                              _focus={{
                                border: "2px",
                                borderColor: "var(--primary-color)",
                              }}
                              value={editPostInput}
                              onChange={(e) => setEditPostInput(e.target.value)}
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              onClick={() => updatePostHandler(post)}
                              colorScheme="purple"
                              mr={3}
                            >
                              Update
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                      <MenuItem onClick={() => deletePostHandler(post)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu> */}
                </>
              ) : (
                <>
                  {' '}
                  <SiIcons.SiSimpleanalytics cursor="pointer" />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        {/* <Comments eachPost={post} /> */}
      </Box>
    </div>
  );
}
