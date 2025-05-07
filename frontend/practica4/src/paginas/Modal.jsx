import {Form, Formik} from "formik";
import { usePacientes } from "../context/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/modal.css";

function Modal({ isOpen, closeModal }) {
  const { createPaciente } = usePacientes(); 
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <dialog open className="modal">
        <Formik 
          initialValues={{
            nombre: "",
            apellido: "",
            edad: "",
            talla: "",
            peso: "",
            sexo: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              await createPaciente(values); // Usa la función del contexto
              actions.resetForm();
              closeModal(); // Cierra el modal después de guardar
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <h2>Crear Paciente</h2>
              <div className="row">
                <div className="col">
                <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Introduzca el nombre"
                  onChange={handleChange}
                  value={values.nombre}
                />
              </div>
                </div>
                <div className="col">
                <div className="form-group">
                <label>Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  placeholder="Introduzca el apellido"
                  onChange={handleChange}
                  value={values.apellido}
                />
              </div>
                </div>
                <div className="col">
                <div className="form-group">
                <label>Edad</label>
                <input
                  type="number"
                  name="edad"
                  placeholder="Introduzca la edad"
                  onChange={handleChange}
                  value={values.edad}
                />
              </div>
                </div>

              </div>
              <div className="row">
                <div className="col">
                <div className="form-group">
                <label>Talla</label>
                <input
                  type="number"
                  name="talla"
                  placeholder="Introduzca la talla"
                  onChange={handleChange}
                  value={values.talla}
                />
              </div>
                </div>
                <div className="col">
                <div className="form-group">
                <label>Peso</label>
                <input
                  type="number"
                  name="peso"
                  placeholder="Introduzca el peso"
                  onChange={handleChange}
                  value={values.peso}
                />
              </div>
                </div>
                <div className="col">
                <div className="form-group">
                <label>Sexo</label>
                <input
                  type="text"
                  name="sexo"
                  placeholder="Introduzca el sexo"
                  onChange={handleChange}
                  value={values.sexo}
                />
              </div>
                </div>
              </div>
            
              <div className="btns">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Guardando" : "Guardar"}
              </button>
              <button type="button" onClick={closeModal}>
                Cerrar
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </dialog>
    </>
  );
}

export default Modal;