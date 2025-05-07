import DataTable from 'react-data-table-component';
import { usePacientes} from "../context/context";
import EditModal from "./EditModal"; 
import { FaEdit, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/paciente.css";

function Pacientes () {
  
const {pacientes, deletePaciente, openEditModal} = usePacientes();
const { isEditModalOpen, selectedPaciente, closeEditModal } = usePacientes();

 
const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Nombre',
    selector: row => row.nombre,
    sortable: true,
  },
  {
    name: 'Apellido',
    selector: row => row.apellido,
    sortable: true,
  },
  {
    name: 'Edad',
    selector: row => row.edad,
    sortable: true,
  },
  {
    name: 'Talla',
    selector: row => row.talla,
    sortable: true,
  },
  {
    name: 'Peso',
    selector: row => row.peso,
    sortable: true,
  },
  {
    name: 'Sexo',
    selector: row => row.sexo,
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: row => (
      <div>
      <FaEdit
        onClick={() => openEditModal(row)} 
        style={{
          cursor: 'pointer',
          marginRight: '10px',
          color: '#007bff', 
          width: '20px',
          height: '20px',
          marginLeft: '10px',
        }}
        title="Editar" 
      />
      <FaTrash
        onClick={() => deletePaciente(row.id)} 
        style={{
          cursor: 'pointer',
          color: '#dc3545', 
          width: '20px',
          height: '20px',
          marginLeft: '10px',
        }}
        title="Eliminar" 
      />
    </div>
    ),
    ignoreRowClick: true,
  }
];
const customStyles = {
 
  rows: {
    style: {
      minHeight: '52px',
      backgroundColor: '#f8f9fa',
      paddingLeft: '8px', 
      paddingRight: '8px',
    },
  },
  headCells: {
    style: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      paddingLeft: '8px', 
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', 
      paddingRight: '8px',
    },
  },
  table: {
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      border: '1px solid #dee2e6',

    },
  },
  pagination: {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
    },
  },
};

const paginationOptions = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
};
const paginationPerPage = 10;
const paginationRowsPerPageOptions = [5, 10, 20, 50];
const paginationRowsPerPageText = 'Filas por página';
const paginationRangeSeparatorText = 'de';
const paginationSelectAllRowsItemText = 'Todos';
const paginationSelectAllRowsItem = true;
  
  return (
    <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <h1>Pacientes</h1>
      <DataTable
        columns={columns}
        data={pacientes}
        customStyles={customStyles}
        pagination
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        paginationRowsPerPageText={paginationRowsPerPageText}
        paginationRangeSeparatorText={paginationRangeSeparatorText}
        paginationSelectAllRowsItemText={paginationSelectAllRowsItemText}
        paginationSelectAllRowsItem={paginationSelectAllRowsItem}
      />
      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          closeModal={closeEditModal}
          paciente={selectedPaciente}
        />
      )}
    </div>
  );
}

export default Pacientes;