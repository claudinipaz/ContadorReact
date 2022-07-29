
import './App.css';
import NavBar from './navbar/navbar';

import Boton from './contador/contador';
import Contador1 from './contador/boton';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics]=useState(0);
  const manejarClick=()=>{
    setNumClics(numClics+1);
  }
  const reiniciarContador=()=>{
    setNumClics(numClics-1);
  }
  return (
    <div className="App">
     <NavBar/>
    
      
     
      <div className='ContenedorPrinicpal'>
      <Contador1 numClics={numClics}/>
        <Boton texto='CLICK'
        botonClick={true}
        manejarClick={manejarClick}/>

    <Boton texto='RESTAR UNO'
        botonClick={false}
        manejarClick={reiniciarContador}/>
        
      </div>
      
    </div>
    
  );
}

export default App;
