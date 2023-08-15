import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

import { makeServer } from './server';
import { AuthProvider } from './contexts/auth.context';
import { DataProvider } from './contexts/data.context';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <ChakraProvider>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </ChakraProvider>
  </Router>,
  // </React.StrictMode>,
);
