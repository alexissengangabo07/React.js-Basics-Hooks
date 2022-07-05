import React, { useState, useEffect, useRef } from 'react';
import './client.css';
import Form from "./Form";
import Table from './Table';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Client() {
  useEffect(() => {
    document.title = "Clients"
  });

  let [client, setClient] = useState([]);
  let [inputVal, setInputVal] = useState({ nom: '', prenom: '', sexe: '' });
  let [selected, setSelected] = useState([]);
  let formRef = useRef(null);

  const toastProp = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };
  const notifySuccess = () => toast.success("Client ajouté  avec succès!", toastProp);
  const notifyDelete = () => toast.error("Client(s) supprimé!", toastProp);

  const addClient = (e) => {
    let arrayClients = [...client];
    arrayClients.unshift(inputVal);
    setClient(arrayClients);
    setInputVal({ nom: '', prenom: '', sexe: '' });
    notifySuccess();
  }
  const deleteClient = (index) => {
    let arrayClients = [...client];
    arrayClients.splice(index, 1);
    setClient(arrayClients);
    notifyDelete()
  }
  const deleteMultiple = (elements) => {
    let arrayClients = [...client];
    let sortElem = elements.sort().reverse();
    for(let i = 0; i < sortElem.length; i++) {
      arrayClients.splice(Number(sortElem[i]), 1);
    }
    setSelected([])
    setClient(arrayClients);
    notifyDelete();
    formRef.current.reset();
  }

  return (
    <div className="container">
      <ToastContainer style={{marginTop: 50}} />
      <div className="header">
        <h1>Clients</h1>
      </div>
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
              <Table clientArray={client} selected={selected} setSelected={setSelected}  formRef={formRef}  deleteClient={deleteClient} deleteMultiple={deleteMultiple}  />
            </div>
          </article>
        </section>
    </div>
  )
}

export default Client;