import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./Task";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aún
      </h1>
    );
  }

  return (
    <div className="flex flex-row gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
