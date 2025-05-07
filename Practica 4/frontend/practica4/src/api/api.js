import axios from 'axios';

export const getPacientesRequest = async () =>
    await axios.get('http://localhost:4000/pacientes')

export const createPacienteRequest = async (paciente) => 
    await axios.post('http://localhost:4000/pacientes', paciente)

export const deletePacienteRequest = async (id) =>
    await axios.delete(`http://localhost:4000/pacientes/${id}`)

export const updatePacienteRequest = async (id, paciente) =>
    await axios.put(`http://localhost:4000/pacientes/${id}`, paciente)
 