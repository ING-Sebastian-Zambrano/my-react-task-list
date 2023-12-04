// Importar React y ReactDOM desde React
import React from "react";
import ReactDOM from "react-dom/client";

// Importar el componente App desde "./App"
import App from "./App";

// Importar el proveedor de contexto TaskContextProvider desde "./context/TaskContext"
import { TaskContextProvider } from "./context/TaskContext";

// Importar el archivo de estilos global "./index.css"
import "./index.css";

// Utilizar ReactDOM.createRoot para renderizar la aplicación en el elemento con id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  // Utilizar React.StrictMode para habilitar comprobaciones adicionales en el desarrollo
  <React.StrictMode>
    {/* Utilizar el proveedor de contexto TaskContextProvider para envolver la aplicación */}
    <TaskContextProvider>
      {/* Renderizar el componente principal de la aplicación, App */}
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
