import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Task({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex items-center">
      {/* Checkbox para indicar el estado de la tarea */}
      <input type="checkbox" className="mr-4" />

      {/* Contenido de la tarea (nombre) */}
      <div>
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
      </div>

      {/* Botón para eliminar la tarea */}
      <button
        className="bg-red-500 px-2 py-2 rounded-md ml-auto hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default Task;
