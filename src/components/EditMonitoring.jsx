import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import { FloatingLabel, Modal } from "react-bootstrap";
import { classrooms, class_subjects } from "../data/data";
import { EditInput, EditSelect } from "../styles/ListStyles";
import { ModalButton } from "../styles/GlobalStyles";
import { FormStyled } from "../styles/FormsStyles";
import { editMonitoringAsync } from "../redux/actions/actionMonitoring";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";

const EditMonitoringSchema = Yup.object().shape({
  subject: Yup.string().required("Materia requerida"),
  monitor: Yup.string().required("Monitor requerido"),
  classroom: Yup.string().required("Salón de clases requerido"),
  date: Yup.string().required("Fecha requerida"),
});

export const EditMonitoring = ({ show, handleClose, monitorias }) => {
  const { monitors } = useSelector((state) => state.monitors);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const closeModal = () => {
    setDisabled(true);
    handleClose();
  };

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Monitorías</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          id: monitorias.id,
          subject: monitorias.subject,
          monitor: monitorias.monitor,
          date: monitorias.date,
          classroom: monitorias.classroom,
        }}
        validationSchema={EditMonitoringSchema}
        onSubmit={(values) => {
          dispatch(editMonitoringAsync(values));
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
                <FloatingLabel label="Materia" className="inputLogin">
                  <EditSelect
                    name="subject"
                    onChange={handleChange}
                    value={values.subject}
                    disabled={disabled}
                  >
                    {class_subjects.map((subject) => (
                      <option key={subject.id} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                  </EditSelect>
                  {errors.subject && touched.subject ? (
                    <div className="error">{errors.subject}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Monitor" className="inputLogin">
                  <EditSelect
                    name="monitor"
                    onChange={handleChange}
                    value={values.monitor}
                    disabled={disabled}
                  >
                    {monitors.map((mon) => (
                      <option
                        key={mon.id}
                        value={mon.name + " " + mon.lastName}
                      >
                        {mon.name} {mon.lastName}
                      </option>
                    ))}
                  </EditSelect>
                  {errors.monitor && touched.monitor ? (
                    <div className="error">{errors.monitor}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Fecha" className="inputLogin">
                  <EditInput
                    type="date"
                    name="date"
                    onChange={handleChange}
                    value={values.date}
                    disabled={disabled}
                  />
                  {errors.date && touched.date ? (
                    <div className="error">{errors.date}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Salón de clases" className="inputLogin">
                  <EditSelect
                    name="classroom"
                    onChange={handleChange}
                    value={values.classroom}
                    disabled={disabled}
                  >
                    {classrooms.map((classroom) => (
                      <option key={classroom.id} value={classroom.name}>
                        {classroom.name}
                      </option>
                    ))}
                  </EditSelect>
                  {errors.classroom && touched.classroom ? (
                    <div className="error">{errors.classroom}</div>
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
