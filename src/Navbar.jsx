import {
  Box, Button, Flex, Heading, Image,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import panchatLogo from './assets/panchat_logo.png';

export default function Navbar() {
  const navigate = useNavigate();
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

          <Link to="/">
            <Button
              bg="var(--primary-color)"
              color="var(--text-primary-color)"
              _hover={{ bg: 'var(--secondary-color)', color: 'var(--text-primary-color)' }}
              marginRight="20px"
              size="md"
              variant="ghost"
              fontWeight="bold"
            >
              Logout
            </Button>
          </Link>
        </Box>
      </nav>
    </div>
  );
}
