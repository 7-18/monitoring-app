import { useEffect } from "react";
import { FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { classrooms, class_subjects } from "../data/data";
import { addMonitoringAsync } from "../redux/actions/actionMonitoring";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";
import {
  DivForms,
  FormStyled,
  InputStyled,
  SelectStyled,
} from "../styles/FormsStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { ButtonStyled } from "../styles/GlobalStyles";
import { NotFound } from "./NotFound";
import { useNavigate } from "react-router-dom";

const MonitoringSchema = Yup.object().shape({
  subject: Yup.string().required("Materia requerida"),
  monitor: Yup.string().required("Monitor requerido"),
  classroom: Yup.string().required("Salón de clases requerido"),
  date: Yup.string().required("Fecha requerida"),
});

export const CreateMonitoring = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  return (
    <DivForms>
      {monitors.length > 0 ? (
        <>
          <Formik
            initialValues={{
              subject: "",
              monitor: "",
              date: "",
              classroom: "",
            }}
            validationSchema={MonitoringSchema}
            onSubmit={(values) => {
              dispatch(addMonitoringAsync(values));
              navigate("/list-monitoring");
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <FormStyled className="form flex-column d-flex gap-2">
                <h2 className="display-6 fs-2">Crear monitoria</h2>
                <FloatingLabel label="Materia" className="inputLogin">
                  <SelectStyled name="subject" onChange={handleChange}>
                    <option value="" selected disabled hidden>
                      Selecciona la materia
                    </option>
                    {class_subjects.map((subject) => (
                      <option key={subject.id} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                  </SelectStyled>
                  {errors.subject && touched.subject && (
                    <div className="error">{errors.subject}</div>
                  )}
                </FloatingLabel>
                <FloatingLabel label="Monitor" className="inputLogin">
                  <SelectStyled name="monitor" onChange={handleChange}>
                    <option value="" selected disabled hidden>
                      Selecciona al monitor
                    </option>
                    {monitors.map((monitor) => (
                      <option
                        key={monitor.id}
                        value={monitor.name + " " + monitor.lastName}
                      >
                        {monitor.name} {monitor.lastName}
                      </option>
                    ))}
                  </SelectStyled>
                  {errors.monitor && touched.monitor && (
                    <div className="error">{errors.monitor}</div>
                  )}
                </FloatingLabel>
                <FloatingLabel label="Fecha" className="inputLogin">
                  <InputStyled
                    type="date"
                    name="date"
                    placeholder="Ingresa tu fecha"
                    onChange={handleChange}
                    value={values.date}
                  />
                  {errors.date && touched.date ? (
                    <div className="error">{errors.date}</div>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel label="Salón de clases" className="inputLogin">
                  <SelectStyled name="classroom" onChange={handleChange}>
                    <option value="" selected disabled hidden>
                      Selecciona el salón de clases
                    </option>
                    {classrooms.map((classroom) => (
                      <option key={classroom.id} value={classroom.name}>
                        {classroom.name}
                      </option>
                    ))}
                  </SelectStyled>
                  {errors.classroom && touched.classroom && (
                    <div className="error">{errors.classroom}</div>
                  )}
                </FloatingLabel>
                <ButtonStyled type="submit" onClick={handleSubmit}>
                  Crear monitoría
                </ButtonStyled>
              </FormStyled>
            )}
          </Formik>
        </>
      ) : (
        <div className="w-50">
          <NotFound
            text={"Para registrar monitorías debe tener monitores disponibles"}
            navigation={"/add-monitors"}
            add={"Agregar monitores"}
          />
        </div>
      )}
    </DivForms>
  );
};
