import './Resource.css';

import { useState } from 'react';
import { EditIcon } from '../../assets/EditIcon'

export const Resource = ({ ...resource }) => {
  const [menuVisible, setMenuVisible] = useState(false);

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
        <button>Eliminar</button>
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
