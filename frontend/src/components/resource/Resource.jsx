/* eslint-disable react/prop-types */
import './Resource.css';

import { useState } from 'react';
import { EditIcon } from '../../assets/EditIcon'

import axios from "axios";

export const Resource = ({ onUpdate, ...resource }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const eliminarArchivo = () => {
    axios.request({
      method: "delete",
      url: `http://localhost:8080/resources/${resource.id}`,
    })
    .then( () => onUpdate());
    };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
    <li className="titlesResource">
      <h2>{resource.title}</h2>
      
      <div className='containerMenu'>
      <div className={`menu ${menuVisible ? 'visible' : ''}`}>
        <button>Ver</button>
        <button>Editar</button>
        <button onClick={() => eliminarArchivo(resource.id)}>
          Eliminar
        </button>
      </div>

      <button className='editIcon' onClick={toggleMenu}>
        <EditIcon />
      </button>
      </div>

    </li>
    <hr></hr>
    </>
  )
}
