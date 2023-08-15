import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useAuth } from '../../contexts/auth.context';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import { MainContainer } from '../../components/MainContainer';
import RightSideBar from '../../components/RightSidebar/RightSidebar';

function Home() {
  const { authState } = useAuth();
  console.log(authState);
  return (
    <Flex bg="#E5E5E5">
      <LeftSidebar />
      <MainContainer />
      <RightSideBar />
    </Flex>
  );
}

export default Home;
