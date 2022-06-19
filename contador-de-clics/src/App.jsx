import './App.css';
import { useState } from 'react';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';



function App() {

  const [numClic, setNumClic] = useState(0);

  const manejarClic = () => {
    setNumClic(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumClic(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClic} />
        <Boton 
        texto='Clic' 
        esBotonDeClic={true} 
        manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
