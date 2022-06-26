import React, {useState} from 'react';
import './client.css';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  TextField, Button, FormGroup, FormLabel, ButtonGroup, InputLabel,
  Select, MenuItem, FormControl
} from '@mui/material';
import {} from '@mui/x-data-grid'

function Client() {
  let [client, setClient] = useState({
    id: 0,
    nom: '',
    prenom: '',
    sexe: ''
  });
  let clients = [];
const addClient = (e, lastId) => {
  let data = new FormData(e.target);
  console.log(clients);
  
  clients.push({
      id: lastId+=1,
      nom: data.get('nom'),
      prenom: data.get('prenom'),
      sexe: data.get('sexe')
  });
  
  setClient({
    id: lastId+=1,
    nom: data.get('nom'),
    prenom: data.get('prenom'),
    sexe: data.get('sexe')
  });
  console.log(clients);
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
                <form encType='multipart/form-data' onSubmit={(e) => { e.preventDefault(); addClient(e, client.id)}} autoComplete="off">
                  <FormGroup className='form-group'>
                    <FormLabel required={true} className="label">Nom</FormLabel>
                    <TextField name='nom' size='medium' label="Entrer le nom" variant="outlined" />
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <FormLabel required={true} className="label">Prenom</FormLabel>
                    <TextField name='prenom' size='medium' label="Entrer le prenom" variant="outlined" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className='label'>Sexe</FormLabel>
                    <FormControl fullWidth>
                      <InputLabel className='label' id="sexe">Sexe</InputLabel>
                      <Select
                        labelId="sexe"
                        id="select-sexe"
                        name="sexe"
                        label="sexe"
                        value={client.sexe}
                        onChange={(e) => setClient({...client, sexe: e.target.value})}
                      >
                        <MenuItem value={'Masculin'}>Masculin</MenuItem>
                        <MenuItem value={'Feminin'}>Feminin</MenuItem>
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <ButtonGroup size='large' variant='outlined' >
                      <Button type='reset' color='secondary' style={{width: '50%'}}>RESET</Button>
                      <Button type="sumbit" color="primary" style={{width: '50%'}}>ENREGISTRER</Button>
                    </ButtonGroup>
                  </FormGroup>
                </form>
              </article>
              <article className='articles'>
                <div>
                  <h3>Liste des clients</h3>
                </div>
                <div>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Sexe</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td>Nom</td>
                        <td>Prenom</td>
                        <td>Sexe</td>
                        <td><Button color="error" size='larg' variant='contained'><AiOutlineDelete /></Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
        </main>
    </div>
  )
}

export default Client;