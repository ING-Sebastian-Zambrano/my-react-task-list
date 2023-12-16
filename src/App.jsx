
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List></List>} />
          <Route path="/about" element={<SobreNosotros></SobreNosotros>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
