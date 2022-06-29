import React, { useState, useEffect } from 'react';
import './client.css';
import Form from "./Form";
import Table from './Table';

function Client() {
  useEffect(() => {
    document.title = "Clients"
  });

  let [client, setClient] = useState([]);
  let [inputVal, setInputVal] = useState({ nom: '', prenom: '', sexe: '' });
  let [selected, setSelected] = useState([]);

  const addClient = (e) => {
    let arrayClients = [...client];
    arrayClients.unshift(inputVal);
    setClient(arrayClients);
    setInputVal({ nom: '', prenom: '', sexe: '' });
  }
  const deleteClient = (index) => {
    let arrayClients = [...client];
    arrayClients.splice(index, 1);
    setClient(arrayClients);
  }
  const deleteMultiple = (elements) => {
    let arrayClients = [...client];
    let sortElem = elements.sort().reverse();
    for(let i = 0; i < sortElem.length; i++) {
      arrayClients.splice(Number(sortElem[i]), 1);
    }
    setSelected([])
    setClient(arrayClients);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Clients</h1>
      </div>
      <main>
        <section className='section-flex'>
          <article className='articles'>
            <div>
              <h3>Ajouter un client</h3>
            </div>
            <Form addClient={addClient} setInputVal={setInputVal} inputVal={inputVal} />
          </article>
          <article className='articles'>
            <div>
              <h3>Liste des clients <span className='badge'>{client.length}</span></h3>
            </div>
            <div>
              <Table clientArray={client} selected={selected} setSelected={setSelected}  deleteClient={deleteClient} deleteMultiple={deleteMultiple}  />
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Client;