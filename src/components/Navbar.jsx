import {
  Box, Button, Flex, Heading, Image,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import panchatLogo from '../assets/panchat_logo.png';
import { useAuth } from '../contexts/auth.context';

export default function Navbar() {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    authDispatch({ type: 'setUser', payload: null });
    authDispatch({ type: 'setToken', payload: null });
    // navigate('/');
    toast.success("You're logged out!");
  };

  return (
    <div>
      <nav>
        <Box
          p={2}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          height="80px"
        >
          <Flex flexDirection="row" alignItems="center">
            <Image src={panchatLogo} alt="logo" height="60px" color="var(--primary-color)" />
            <Heading
              marginLeft={2}
              as="h4"
              color="var(--primary-color)"
              fontWeight="extrabold"
              size="xl"
              onClick={() => navigate('/home')}
            >
              PanChat
            </Heading>
          </Flex>

          <Button
            bg="var(--primary-color)"
            color="var(--text-primary-color)"
            _hover={{ bg: 'var(--secondary-color)', color: 'var(--text-primary-color)' }}
            marginRight="20px"
            size="md"
            variant="ghost"
            fontWeight="bold"
            onClick={() => logoutUser()}
          >
            Logout
          </Button>

        </Box>
      </nav>
    </div>
  );
}
