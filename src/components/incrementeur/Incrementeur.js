import React from 'react';
import './incrementeur.css';
import {ButtonGroup, Button} from '@mui/material';

function Incrementeur() {
  return (
    <div className="container">
        <div className="header">
            <h1>Incrementeur</h1>
        </div>
        <main className="main">
            <h5>Increment / Decrement</h5>
            <div className='elements'>
                <div>
                    <h1>2</h1>
                </div>
                <div className="buttons">
                <ButtonGroup variant="contained" size="large">
                    <Button>Hello World</Button>
                    <Button color="success">Hello World</Button>
                </ButtonGroup>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Incrementeur