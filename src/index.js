import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    body: `Poppins, sans-serif`,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);