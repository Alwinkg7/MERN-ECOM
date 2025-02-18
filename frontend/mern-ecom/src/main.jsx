import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import App from './App.jsx';
import Provider from './components/ui/provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        
          <Box bg="gray.900" minH="100vh" color="white">
            <App />
          </Box>
        
      </BrowserRouter>
    </Provider>
  </StrictMode>
);