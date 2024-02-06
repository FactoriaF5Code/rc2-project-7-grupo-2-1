import "./ResourceContainer.css";

import { Resource } from "../resource/Resource";
import { AddIcon } from "../../assets/AddIcon";
import { AddModal } from "../addModal/AddModal";
import { useState, useEffect } from "react";

import axios from "axios";

export const ResourceContainer = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [hayQueHacerGet, setHayQueHacerGet] = useState(true);
  const [recursoAEditar, setRecursoAEditar] = useState(undefined);

  useEffect(() => {
    if (hayQueHacerGet) {
      axios
        .request({
          method: "get",
          url: "http://localhost:8080/resources",
        })
        .then((r) => setResponse(r.data))
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
          setHayQueHacerGet(false);
        });
    }
  }, [hayQueHacerGet]);



  const toggleModal = (id) => {
    setRecursoAEditar(response.find( r => r.id ===  id));
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const updateList = () => {
    closeModal();
    // volver a llamar al get para ver la nueva lista
    setHayQueHacerGet(true);
  };

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
        {Array.isArray(response) &&
          response.map((resource) => (
            <Resource key={resource.id} {...resource} onUpdate={updateList} toggleModal={toggleModal} />
          ))}
      </ul>
      <div className={`modal ${modalVisible ? "visible" : ""}`}>
        <AddModal onClose={closeModal} onSubmit={updateList} resource={recursoAEditar} />
      </div>
    </main>
  );
};
