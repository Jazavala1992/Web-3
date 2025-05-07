import { Formik, Form } from "formik";
import { usePacientes } from "../context/context";
import "../css/editmodal.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function EditModal({ isOpen, closeModal, paciente }) {
    const { editPaciente } = usePacientes();
    if (!isOpen) return null;
  
    return (
      <>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal">
          <Formik
            initialValues={{
              nombre: paciente.nombre || "",
              apellido: paciente.apellido || "",
              edad: paciente.edad || "",
              talla: paciente.talla || "",
              peso: paciente.peso || "",
              sexo: paciente.sexo || "",
            }}
            onSubmit={async (values, actions) => {
              try {
                await editPaciente(paciente.id, values); // Llama a la función del contexto
                actions.resetForm();
                closeModal(); // Cierra el modal después de guardar
              } catch (error) {
                console.error("Error al editar paciente:", error);
              }
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <h2>Editar Paciente</h2>

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
                <div className="row">
                    <div className="btns">
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Guardando" : "Guardar"}
                      </button>
                      <button type="button" onClick={closeModal}>
                        Cerrar
                      </button>
                    </div>
                </div>
                
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
  
  export default EditModal;