import React from 'react';

// 1. Componente para el botón (la acción)
const CardButton = () => (
  <a href="#" className="btn btn-primary">
    Go somewhere
  </a>
);

// 2. Componente para el Título y el Párrafo (el contenido textual)
const CardContent = () => (
  <>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card’s content.
    </p>
  </>
);

// 3. Componente para el Cuerpo del Card (agrupa contenido y botón)
const CardBody = () => (
  <div className="card-body">
    <CardContent />
    <CardButton />
  </div>
);

// Componente principal 
function Card() {
  
  return (
    <div className="card" style={{ width: "350px", margin: "20px auto", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <CardBody />
    </div>
  );
}

// Main App Component para renderizar el Card y aplicar un estilo base 
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Fragmented Card (Original Classes)</h1>
        <Card />
      </div>
    </div>
  );
};

export default App;