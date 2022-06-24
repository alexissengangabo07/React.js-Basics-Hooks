import React from 'react';
import './incrementeur.css';

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
                    <input type="button" className="btn increment" value="INCREMENTER" />
                    <input type="button" className="btn decrement" value="DECREMENTER" />
                </div>
            </div>
        </main>
    </div>
  )
}

export default Incrementeur