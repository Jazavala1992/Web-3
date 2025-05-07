import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";
import Pacientes from "./paginas/pacientes.jsx";
import Navbar from "./componentes/navbar.jsx";
import Formulario from "./paginas/Modal.jsx";
import { PacientesProvider } from "./context/context.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
  <PacientesProvider>
    <Navbar openModal={openModal}/>
    <Routes>
      <Route path="/" element={<Pacientes />} />
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/pacientes/nuevo" element={<Formulario />} />
      <Route path="/pacientes/:id" element={<Formulario />} />
    </Routes>
    {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
  </PacientesProvider> 
  )
}

export default App
