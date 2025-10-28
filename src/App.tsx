import React from 'react';

// El tipo React.FC (Functional Component) se usa para componentes en TypeScript
const App: React.FC = () => {
  return (
    // 'container' y 'mt-5' son clases de Bootstrap para centrar y dar margen
    <div className="container mt-5"> 
      
      {/* Título principal con estilo Primary (azul) */}
      <h1 className="mb-4 text-primary">¡Hola Mundo</h1>
      
      <p className="lead">
        El mismo texto con diferentes clases de color de Bootstrap:
      </p>

      {/* USO DE ESTILOS BOOTSTRAP */}
      
      {/* Estilo Success (Verde) con relleno y bordes redondeados */}
      <div className="p-3 mb-3 bg-success text-white rounded">
        <h2>Hola Mundo (Success) ✅</h2>
        <p>Color verde, usado para indicar éxito. Clases: p-3, mb-3, bg-success, text-white, rounded.</p>
      </div>
      
      {/* Estilo Danger (Rojo) */}
      <div className="p-3 mb-3 bg-danger text-white rounded">
        <h2>Hola Mundo (Danger) 🛑</h2>
        <p>Color rojo, usado para indicar errores o peligro.</p>
      </div>

      {/* Estilo Info (Celeste) */}
      <div className="p-3 mb-3 bg-info text-dark rounded">
        <h2>Hola Mundo (Info) ℹ️</h2>
        <p>Color celeste, usado para información neutral.</p>
      </div>

      {/* Ejemplo de Botón con estilo Primario */}
      <button 
        type="button" 
        className="btn btn-primary btn-lg mt-4" 
        onClick={() => alert('¡El botón de Bootstrap funciona!')}
      >
        Botón de Bootstrap (Primary)
      </button>
      
    </div>
  );
}

export default App;