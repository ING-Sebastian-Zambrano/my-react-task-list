
import React from 'react';
import TaskForm from './Header';  // Asumiendo que TaskForm se ha exportado correctamente desde Header.jsx
import TaskList from './TaskList';  // Asumiendo que TaskList se ha exportado correctamente desde TaskList.jsx



function List() {
  return (
    <div >
      <TaskForm />
      <TaskList />
    </div>
  );

}

export default List;

