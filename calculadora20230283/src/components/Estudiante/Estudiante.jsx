import React, { useState } from 'react';
import './Estudiante.css';

const Estudiante = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    nombre: '',
    edad: '',
    carnet: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEstudiante({
      ...nuevoEstudiante,
      [name]: value
    });
  };

  const agregarEstudiante = () => {
    if (nuevoEstudiante.nombre.trim() === '' || 
        nuevoEstudiante.edad.trim() === '' || 
        nuevoEstudiante.carnet.trim() === '') {
      return;
    }

    setEstudiantes([...estudiantes, nuevoEstudiante]);
    setNuevoEstudiante({
      nombre: '',
      edad: '',
      carnet: ''
    });
  };

  return (
    <div className="estudiante-container">
      <h1>Registro de Estudiantes</h1>
      
      <div className="formulario">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={nuevoEstudiante.edad}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="carnet"
          placeholder="Carnet"
          value={nuevoEstudiante.carnet}
          onChange={handleInputChange}
        />
        <button onClick={agregarEstudiante}>Agregar</button>
      </div>
      
      <div className="listado">
        <h2>Listado:</h2>
        {estudiantes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Carnet</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante, index) => (
                <tr key={index}>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.edad}</td>
                  <td>{estudiante.carnet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay estudiantes registrados</p>
        )}
      </div>
    </div>
  );
};

export default Estudiante;