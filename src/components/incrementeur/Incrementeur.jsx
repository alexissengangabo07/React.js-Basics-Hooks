import React, {useState, useEffect} from 'react';
import './incrementeur.css';
import {ButtonGroup, Button} from '@mui/material';

function Incrementeur() {

    let [nombre, setNombre] = useState(0);

    useEffect(() => {
        nombre === 0 ? document.title = "Incrementeur" : document.title = `Incrementeur ${nombre}`;
      });
    
    const handleNombre = (action) => { 
        if(action === 'increment') {
            setNombre(nombre += 1) 
        } 
        else if(action === 'decrement') {
            setNombre(nombre -= 1);
        }
        else {
            setNombre(nombre = 0)
        }
    }
  return (
    <div className="container">
        <div className="header">
            <h1>Incrementeur</h1>
        </div>
        <main className="main">
            <h5>Increment / Decrement</h5>
            <div className='elements'>
                <div>
                    <span className='counter'>{nombre}</span>
                </div>
                <div>
                    <ButtonGroup variant="contained" size="large">
                        <Button color="error" onClick={() => handleNombre('decrement')}>DECREMENTER</Button>
                        <Button color="info" onClick={() => handleNombre('reset')}>REINITIALISER</Button>
                        <Button color="success" onClick={() => handleNombre('increment')}>INCREMENTER</Button>
                    </ButtonGroup>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Incrementeur