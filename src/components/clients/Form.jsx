import React from 'react'
import {
    TextField, Button, FormGroup, FormLabel, ButtonGroup, InputLabel,
    Select, MenuItem, FormControl
  } from '@mui/material';

function Form(props) {
  return (
    <>
        <form encType='multipart/form-data' onSubmit={(e) => { e.preventDefault(); props.addClient(e.target) }} autoComplete="off">
              <FormGroup className='form-group'>
                <FormLabel required={true} className="label">Nom</FormLabel>
                <TextField name='nom' size='medium' label="Entrer le nom" value={props.inputVal.nom} onChange={(e) => props.setInputVal({...props.inputVal, nom: e.target.value})} required={true} />
              </FormGroup>
              <FormGroup className='form-group'>
                <FormLabel required={true} className="label">Prenom</FormLabel>
                <TextField name='prenom' value={props.inputVal.prenom} onChange={(e) => props.setInputVal({...props.inputVal, prenom: e.target.value})} size='medium' label="Entrer le prenom" required={true} />
              </FormGroup>
              <FormGroup className="form-group">
                <FormLabel className='label' required={true}>Sexe</FormLabel>
                <FormControl fullWidth>
                  <InputLabel className='label' id="sexe">Sexe</InputLabel>
                  <Select
                    labelId="sexe"
                    id="select-sexe"
                    name="sexe"
                    label="sexe"
                    value={props.inputVal.sexe}
                    onChange={(e) => {props.setInputVal({...props.inputVal, sexe: e.target.value})}}
                    required={true}
                  >
                    <MenuItem value={'Masculin'}>Masculin</MenuItem>
                    <MenuItem value={'Feminin'}>Feminin</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
              <FormGroup className='form-group'>
                <ButtonGroup size='large' variant='outlined' >
                  <Button type='reset' color='secondary' style={{ width: '50%' }}>RESET</Button>
                  <Button type="sumbit" color="primary" style={{ width: '50%' }}>ENREGISTRER</Button>
                </ButtonGroup>
              </FormGroup>
            </form>
    </>
  )
}

export default Form