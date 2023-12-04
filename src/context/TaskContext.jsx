// Importar React, createContext y useEffect desde React
import React, { createContext, useEffect, useState } from "react";

// Importar el array de tareas desde "../data/tasks"
import { tasks as data } from "../data/tasks";

// Crear un nuevo contexto de tareas
export const TaskContext = createContext();

// Definir el proveedor de contexto TaskContextProvider
export function TaskContextProvider(props) {
  // Utilizar el hook useState para manejar el estado del array de tareas
  const [tasks, setTasks] = useState([]);

  // Función para crear una nueva tarea y agregarla al array de tareas
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  // Función para eliminar una tarea del array de tareas
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Utilizar el hook useEffect para inicializar el array de tareas con datos iniciales
  useEffect(() => {
    setTasks(data);
  }, []);

  // Renderizar el proveedor de contexto con las funciones y el array de tareas como valor del contexto
  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {/* Renderizar los componentes hijos envueltos por el proveedor de contexto */}
      {props.children}
    </TaskContext.Provider>
  );
}
