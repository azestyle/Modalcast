import React, { useState } from 'react';
import Modal from './modal';
import './scss/style.css'

function App() {
  const [Data, setData] = useState(false);

  const Open = () => setData(true);
  const Close = () => setData(false);

  return (
    <div className="App">
      <div className='buttons'>
      <button onClick={Open}>Mene bas</button>  
      </div>
       <Modal show={Data} onClose={Close} />
     
    </div>
  );
}

export default App;
