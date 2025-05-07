import { useContext, useState, useEffect } from "react";
import { getPacientesRequest, deletePacienteRequest, updatePacienteRequest } from "../api/api";
import { PacientesContext } from "./PacienteContext";

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  const openEditModal = (paciente) => {
    setSelectedPaciente(paciente);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {setSelectedPaciente(null);
    setEditModalOpen(false);
  };

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await getPacientesRequest();
        setPacientes(response.data);
      } catch (error) {
        console.error("Error al obtener pacientes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPacientes();
  }, []);

  // función para crear un paciente
  const createPaciente = async (paciente) => {
    try {
      const response = await createPacienteRequest(paciente); // Llama a la API para crear el paciente
      setPacientes((prevPacientes) => [...prevPacientes, response.data]); // Agrega el nuevo paciente al estado
    } catch (error) {
      console.error("Error al crear paciente:", error);
    }
  };

  // función para eliminar un paciente
   const deletePaciente = async (id) => {
    try {
      await deletePacienteRequest(id); 
      setPacientes((prevPacientes) =>
        prevPacientes.filter((paciente) => paciente.id !== id)
      ); 
      alert("Paciente eliminado");
    } catch (error) {
      alert("Error al eliminar paciente");
    }
  };

  //función para editar un paciente
  const editPaciente = async (id, updatedPaciente) => {
    try {
      const response = await updatePacienteRequest(id, updatedPaciente); 
      setPacientes((prevPacientes) =>
        prevPacientes.map((paciente) =>
          paciente.id === id ? response.data : paciente
        )
      ); 
    } catch (error) {
      console.error("Error al editar paciente:", error);
    }
  };

  return (
    <PacientesContext.Provider
      value={{ pacientes, setPacientes, loading, deletePaciente, editPaciente, createPaciente, openEditModal, closeEditModal, isEditModalOpen, selectedPaciente }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export const usePacientes = () => useContext(PacientesContext);