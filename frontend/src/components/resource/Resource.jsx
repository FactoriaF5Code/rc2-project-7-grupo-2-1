/* eslint-disable react/prop-types */
import './Resource.css';

import { useState } from 'react';
import { EditIcon } from '../../assets/EditIcon'

import axios from "axios";

export const Resource = ({ onUpdate, toggleModal, ...resource }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const eliminarArchivo = () => {
    axios.request({
      method: "delete",
      url: `http://localhost:8080/resource/${resource.id}`,
    })
    .then( () => onUpdate());
    };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const botonVer = (url) => {
    window.open(url, '_blank'); 
  };
  /*const editarArchivo = (id, newData, onSubmit) => {
    axios.request({
      method: "get",
      url: `http://localhost:8080/resource/${id}`
    })
    
    .then(response => {
      const resourceData = response.data;
      
      axios.request({
        method: "put",
        url: `http://localhost:8080/resource/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...resourceData,
          ...newData
        }
        .then(() => {
          onSubmit();
        })
        .catch(error => {
          console.error('Error al actualizar el recurso:', error);
        })
      })
      .catch(error => {
        console.error('Error al obtener los datos del recurso:', error);
      });
    })
  }*/

  const botonEditar = (id) => {
    toggleModal(id);
    // editarArchivo(id);
  }

  return (
    <>
    <li className="titlesResource">
      <h2>{resource.title}</h2>
      
      <div className='containerMenu'>
      <div className={`menu ${menuVisible ? 'visible' : ''}`}>
        <button onClick={()=> botonVer (resource.url)}>Ver</button>
        <button onClick={() => botonEditar(resource.id)}>Editar</button>
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
