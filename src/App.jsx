import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';



const App = () => {
  const backgroundStyle = {
    backgroundColor: '#f0f0f0', // Cambia este color según tus preferencias
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <ChakraProvider>
      <Router>
        <Box style={backgroundStyle}>
          {/* Contenido de tu aplicación */}
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/about" element={<SobreNosotros />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
