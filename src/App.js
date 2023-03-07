import './App.css';

import React, { useState, useEffect } from 'react';



function App() {

  const [data, setData] = useState(null);

  async function obtenerDatos() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const datos = await respuesta.json();
    setData(datos.results);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
      {data ? (
        <div >
          {data.map((dato) => (
              <div key={dato.name} >
                {dato.name}
              </div>
          ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}

      </header>
    </div>
  );
}

export default App;
