import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length }]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, { ...task, id: tasks.length }]));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== taskId)));
  };

  const editTask = (taskId, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        prevTasks.map((task) =>
          task.id === taskId
            ? { ...task, title: newTitle, description: newDescription }
            : task
        )
      )
    );
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
        editTask: editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
