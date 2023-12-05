
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (title.length < 3) {
      setError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }
// Si se desea que la descripcion sea Obligatoria descomentar estas lineas de código
//    if (description.trim() === "") {
//      setError("La descripción de la tarea no puede estar vacía.");
//      return;
//    }

    // Crear tarea si pasa las validaciones
    createTask({ title, description });

    // Limpiar el formulario y resetear el error
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Escribe la descripción de la tarea (Opcional)"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
