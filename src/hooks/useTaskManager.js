
import { useState, useEffect } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTitle, updatedDescription, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: updatedTitle, description: updatedDescription, completed: completed }
          : task
      )
    );
  };

  const toggleTaskCompletion = (taskId, completed) => {
    editTask(taskId, tasks.find((task) => task.id === taskId).title, tasks.find((task) => task.id === taskId).description, completed);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return { tasks, createTask, deleteTask, editTask, toggleTaskCompletion };
};

