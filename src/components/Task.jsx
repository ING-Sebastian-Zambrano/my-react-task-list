import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function Task({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex items-center">
      <input type="checkbox" className="mr-4" />
      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="mb-2"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
          </div>
        )}
      </div>
      <div className="ml-auto">
        {isEditing ? (
          <button
            className="bg-green-500 px-2 py-2 rounded-md mr-2 hover:bg-green-400"
            onClick={handleEdit}
          >
            Guardar
          </button>
        ) : (
          <button
            className="bg-blue-500 px-2 py-2 rounded-md mr-2 hover:bg-blue-400"
            onClick={() => setIsEditing(true)}
          >
            Editar
          </button>
        )}
        <button
          className="bg-red-500 px-2 py-2 rounded-md hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar tarea
        </button>
      </div>
    </div>
  );
}

export default Task;
