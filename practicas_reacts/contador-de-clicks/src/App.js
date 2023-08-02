import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciar_contador = () => {
    setNumClicks(0)
  }
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
        <Contador 
        numeroClicks = {numClicks} />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
         <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciar_contador}
        />
      </div>
    </div>
  );
}

export default App;
