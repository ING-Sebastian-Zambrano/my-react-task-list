// Importar React, useEffect y useState desde React
import React from "react";
import TaskForm from "./components/Header";  // Importar el componente TaskForm
import TaskList from "./components/TaskList";  // Importar el componente TaskList

// Definir el componente funcional App
function App() {
  // Renderizar el contenido principal de la aplicación
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/* Renderizar el formulario para agregar tareas */}
        <TaskForm />

        {/* Renderizar la lista de tareas */}
        <TaskList />
      </div>
    </main>
  );
}

// Exportar el componente App para que pueda ser utilizado en otros archivos
export default App;
