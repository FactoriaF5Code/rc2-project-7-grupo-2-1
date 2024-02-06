/* eslint-disable react/prop-types */
import "./AddModal.css";
import { useState, useEffect } from "react";
import { AddIcon } from "../../assets/AddIcon";

import axios from "axios";

export const AddModal = ({ onClose, onSubmit, editResource }) => {
  const [fileType, setFileType] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editResource) {
      setFileType(editResource.fileType);
      setTitle(editResource.title);
      setUrl(editResource.url);
      setDescription(editResource.description);
    }
  }, [editResource]);

  const agregarArchivo = () => {
    axios.request({
      method: "post",
      url: "http://localhost:8080/resources",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title: title,
        url: url,
        description: description,
      },
    })
    .then( () => onSubmit());
    
  };

  const editarArchivo = () => {
    axios.request({
      method: "put",
      url: `http://localhost:8080/resource/${editResource.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title: title,
        url: url,
        description: description,
      },
    })
    .then(() => {
      // Lógica para manejar la respuesta
      console.log("Recurso editado exitosamente");
      onSubmit(); // Llama a la función onSubmit para actualizar la lista de recursos
    })
    .catch((error) => {
      // Lógica para manejar errores
      console.error("Error al editar recurso", error);
    });
  };

  const clearForm = () => {
    setFileType("");
    setTitle("");
    setUrl("");
    setDescription("");
  };

  const closeModal = () => {
    clearForm();
    onClose();
  };

  return (
    <div className="modalContainer">
      <button className="closeIcon" onClick={closeModal}>
        <AddIcon />
      </button>
      <form>
        <div className="info">
          <label htmlFor="fileType" className="form-label"></label>
          <select
            id="fileType"
            name="fileType"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value="html">Todos mis apuntes</option>
          </select>
        </div>

        <div className="info">
          <label htmlFor="title" className="form-label"></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título del Archivo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="info">
          <label htmlFor="url" className="form-label"></label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="URL del Archivo"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="info">
          <label htmlFor="description" className="form-label"></label>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Descripción del Archivo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="modalButton">
          <button type="button" className="button" onClick={agregarArchivo}>
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
};
