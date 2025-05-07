import { Link } from "react-router-dom";
import Modal from "../paginas/Modal";
import { useState } from "react";
import "../css/navbar.css";
import logo from "../imagenes/logo.png";



function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

return (
    <div className="navbar" >
        <div className="col" style={{ flex: "10%" }}>
            <img src={logo} alt="Logo" />
        </div>
        <div className="col" style={{ flex: "64%" }}>
            <h1>Base de datos de pacientes</h1>
        </div>
        <div className="col" style={{ flex: "13%" }}>
            <Link to="/">Home</Link>
        </div>
        <div className="col" style={{ flex: "13%" }}>
            <button onClick={() => setModalOpen(true)}>Crear paciente</button>
            <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />
        </div>
    </div>
);
}

export default Navbar;