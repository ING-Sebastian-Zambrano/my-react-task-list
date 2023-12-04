// Importar React, el hook useState y el contexto TaskContext desde React
import React, { useContext, useState } from "react";

// Importar el contexto TaskContext desde "../context/TaskContext"
import { TaskContext } from "../context/TaskContext";

// Definir el componente funcional TaskForm
function TaskForm() {
  // Utilizar el hook useState para manejar el estado de los campos de título y descripción
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Obtener la función createTask del contexto TaskContext usando el hook useContext
  const { createTask } = useContext(TaskContext);

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    // Evitar que se recargue la página al enviar el formulario
    e.preventDefault();

    // Llamar a la función createTask del contexto para crear una nueva tarea
    createTask({ title, description });

    // Limpiar los campos de título y descripción después de crear la tarea
    setTitle("");
    setDescription("");
  };

  // Renderizar el formulario con campos para el título, descripción y un botón de guardado
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          required
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

// Exportar el componente TaskForm para que pueda ser utilizado en otros archivos
export default TaskForm;
