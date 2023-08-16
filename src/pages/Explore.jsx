import { Flex } from '@chakra-ui/react';
import React from 'react';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSideBar from '../components/RightSidebar/RightSidebar';
// import ExplorePosts from '../components/ExplorePosts';

export default function Explore() {
  return (
    <div>
      <Flex bg="#E5E5E5">
        <LeftSidebar />
        {/* <ExplorePosts /> */}
        <RightSideBar />
      </Flex>
    </div>
  );
}
