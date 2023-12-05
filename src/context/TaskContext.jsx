
import React, { createContext } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const { tasks, createTask, deleteTask, editTask, toggleTaskCompletion } = useTaskManager();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        editTask,
        toggleTaskCompletion,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
