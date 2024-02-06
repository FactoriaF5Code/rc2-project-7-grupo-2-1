/* eslint-disable react/prop-types */
import "./AddModal.css";
import { useState } from "react";
import { AddIcon } from "../../assets/AddIcon";

import axios from "axios";

export const AddModal = ({ onClose, onSubmit, resource }) => {
  const isEdit = resource !== undefined;
  const [fileType, setFileType] = useState(isEdit ? resource.fileType : "");
  const [title, setTitle] = useState(isEdit ? resource.title : "");
  const [url, setUrl] = useState(isEdit ? resource.url : "");
  const [description, setDescription] = useState(isEdit ? resource.description : "");

  console.log("resource prop:", resource);
  console.log("isEdit:", isEdit);
  console.log("title:", title);
  console.log("url:", url);
  console.log("description:", description);

  const agregarArchivo = () => {
    axios.request({
      method: isEdit? "put" : "post",
      url: isEdit ? `http://localhost:8080/resource/${resource.id}` : "http://localhost:8080/resources",
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
            { !isEdit ? <AddIcon /> : <span>Edit</span> }
          </button>
        </div>
      </form>
    </div>
  );
};