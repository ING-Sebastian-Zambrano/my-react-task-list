
import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {

  return (
   
    <nav className="list-container">
      <ul>
        <li className='item'>
          <Link to="/">Home</Link>
        </li>
        <li className='item'>
          <Link to="/list">Tareas</Link>
        </li>
        <li className='item'>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
 
  
  );
};

export default Menu;

