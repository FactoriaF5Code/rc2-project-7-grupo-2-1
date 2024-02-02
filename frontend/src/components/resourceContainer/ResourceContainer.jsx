import './ResourceContainer.css'

import { useAxios } from "../../hooks/useAxios";
import { Resource } from "../resource/Resource";
import { AddIcon } from "../../assets/AddIcon";
import { AddModal } from "../addModal/AddModal";
import { useState } from 'react';

export const ResourceContainer = () => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/resources",
  });

  const resources = Array.isArray(response)
    ? response.map((resource) => <Resource key={resource.id} {...resource} />)
    : [];

  const [modalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <main className="containers">
      <div className="cabeceraCategoria">
        <h1>Todos mis apuntes</h1>
        <button className="addIcon" onClick={toggleModal}>
          <AddIcon />
        </button>
      </div>
      <ul>
        {loading ? <p>Cargando...</p> : null}
        {error ? <p>{error.message}</p> : null}
        {resources}
      </ul>
      <div className={`modal ${modalVisible ? 'visible' : ''}`}>
          <AddModal />
      </div>
    </main>
  );
};
