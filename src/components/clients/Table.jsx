import React, {useRef} from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { Button } from "@mui/material";

function Table(props) {
  let checkboxRef = useRef(null);
  let checkAll = useRef(null);

  const handlerAll = () => {
    if(checkAll.current.checked) {
      checkAll.current.checked = false;
    }
    else {
      checkAll.current.checked = true;
    }
  }

    const addSelected = (e) => {
        let selectArray = [...props.selected];
        if(e.checked) {
            selectArray.push(e.value);
        }
        else {
            selectArray.splice(selectArray.indexOf(e.value), 1);
        }
        props.setSelected(selectArray);
    }

    const handleCheckbox = () => {
      checkboxRef.current.selected = false;
      console.log(checkboxRef.current.selected);
    }

    return (
    <>
    <input ref={checkAll} type="checkbox" /><input ref={checkAll} type="checkbox" /><input ref={checkAll} type="checkbox" />
    <input onClick={handlerAll} type="button" value="OKAY" />
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
                  {
                    props.clientArray.map((client, index) => (
                          <tr key={index}>
                            <td><input type="checkbox" ref={checkboxRef} value={index} onChange={e => addSelected(e.target)} /></td>
                            <td>{client.nom}</td>
                            <td>{client.prenom}</td>
                            <td>{client.sexe}</td>
                            <td><Button onClick={() => props.deleteClient(index)} color="error" size='small' variant='contained'><AiOutlineDelete /></Button></td>
                          </tr>
                    ))
                }
                </tbody>
              </table>
              <div style={{marginTop: 20}}>
              <Button color="error" onClick={() => { props.deleteMultiple(props.selected); handleCheckbox() }} size='large' variant='contained'><AiOutlineDelete /> Supprimer elements</Button>
              </div>
    </>
  )
}

export default Table