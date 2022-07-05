import { useState } from "react";
import { FloatingLabel, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FormStyled } from "../styles/FormsStyles";
import { ModalButton } from "../styles/GlobalStyles";
import { EditInput, EditSelect } from "../styles/ListStyles";
import * as Yup from "yup";
import { Formik } from "formik";
import { academic_programs, semesters } from "../data/data";
import { editMonitorAsync } from "../redux/actions/actionMonitors";

const EditMonitorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nombre muy corto")
    .max(20, "Nombre muy largo")
    .required("Nombre requerido"),
  lastName: Yup.string()
    .min(3, "Apellido muy corto")
    .max(20, "Apellido muy largo")
    .required("Apellido requerido"),
  academic_program: Yup.string().required("Programa académico requerido"),
  semester: Yup.string().required("Semestre requerido"),
  id: Yup.string().min(5, "Cédula inválida").required("Cédula requerida"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  phone: Yup.string()
    .min(9, "Teléfono inválido")
    .required("Teléfono requerido"),
});

export const EditMonitors = ({ show, handleClose, monitor }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const closeModal = () => {
    setDisabled(true);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Monitor</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          name: monitor.name,
          lastName: monitor.lastName,
          academic_program: monitor.academic_program,
          semester: monitor.semester,
          id: monitor.id,
          email: monitor.email,
          phone: monitor.phone,
        }}
        validationSchema={EditMonitorSchema}
        onSubmit={(values) => {
          dispatch(editMonitorAsync(values));
          closeModal();
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <Modal.Body>
              {disabled ? null : (
                <h6 className="text-center">
                  Edita los campos que deseas actualizar
                </h6>
              )}
              <FormStyled className="form flex-column d-flex gap-2 w-100">
                <FloatingLabel label="Nombre" className="inputLogin">
                  <EditInput
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    onChange={handleChange}
                    value={values.name}
                    disabled={disabled}
                  />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Apellido" className="inputLogin">
                  <EditInput
                    type="text"
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                    onChange={handleChange}
                    value={values.lastName}
                    disabled={disabled}
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="error">{errors.lastName}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel
                  label="Programa académico"
                  className="inputLogin"
                >
                  <EditSelect
                    name="academic_program"
                    onChange={handleChange}
                    value={values.academic_program}
                    disabled={disabled}
                  >
                    {academic_programs.map((academic_program) => (
                      <option
                        key={academic_program.id}
                        value={academic_program.name}
                      >
                        {academic_program.name}
                      </option>
                    ))}
                  </EditSelect>
                  {errors.academic_program && touched.academic_program ? (
                    <div className="error">{errors.academic_program}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Semestre" className="inputLogin">
                  <EditSelect
                    name="semester"
                    onChange={handleChange}
                    value={values.semester}
                    disabled={disabled}
                  >
                    {semesters.map((semester) => (
                      <option key={semester.id} value={semester.name}>
                        {semester.name}
                      </option>
                    ))}
                  </EditSelect>
                  {errors.semester && touched.semester ? (
                    <div className="error">{errors.semester}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Cédula" className="inputLogin">
                  <EditInput
                    type="text"
                    name="id"
                    placeholder="Ingresa tu cédula"
                    onChange={handleChange}
                    value={values.id}
                    disabled={disabled}
                  />
                  {errors.id && touched.id ? (
                    <div className="error">{errors.id}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel
                  label="Correo electrónico"
                  className="inputLogin"
                >
                  <EditInput
                    type="text"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleChange}
                    value={values.email}
                    disabled={disabled}
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Teléfono" className="inputLogin">
                  <EditInput
                    type="text"
                    name="phone"
                    placeholder="Ingresa tu teléfono"
                    onChange={handleChange}
                    value={values.phone}
                    disabled={disabled}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="error">{errors.phone}</div>
                  ) : null}
                </FloatingLabel>
              </FormStyled>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex gap-3">
                {disabled ? (
                  <ModalButton
                    className="edit"
                    onClick={() => setDisabled(false)}
                  >
                    Editar
                  </ModalButton>
                ) : (
                  <ModalButton
                    type="submit"
                    className="update"
                    onClick={handleSubmit}
                  >
                    Actualizar
                  </ModalButton>
                )}
                <ModalButton className="cancel" onClick={() => closeModal()}>
                  Cancelar
                </ModalButton>
              </div>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </Modal>
  );
};
