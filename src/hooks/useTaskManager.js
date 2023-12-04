
import { useState } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  return { tasks, createTask, deleteTask, updateTask, setTasks };  
};
