import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { TaskContextProvider } from './context/TaskContext';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </React.StrictMode>
  </ChakraProvider>
);

