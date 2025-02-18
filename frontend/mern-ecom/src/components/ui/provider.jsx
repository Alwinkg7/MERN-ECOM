'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as React from 'react';

const theme = extendTheme({
  // Your theme configuration
});

const Provider = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default Provider;