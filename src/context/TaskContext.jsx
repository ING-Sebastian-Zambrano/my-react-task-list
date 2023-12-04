import React, { createContext, useEffect } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // Utilizamos el hook useTaskManager para gestionar las tareas
  const { tasks, createTask, deleteTask, updateTask, setTasks } = useTaskManager();

  // Nueva función para editar tareas
  const editTask = (taskId, newTitle, newDescription) => {
    // Utilizamos la función updateTask del hook useTaskManager
    updateTask(taskId, { title: newTitle, description: newDescription });
  };

  // Cargamos las tareas desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      // Utilizamos la función setTasks del hook useTaskManager
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  // Resto del código...

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
        updateTask: updateTask,
        editTask: editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
