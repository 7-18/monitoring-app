import { FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMonitorAsync } from "../redux/actions/actionMonitors";
import { academic_programs, semesters } from "../data/data";
import {
  DivForms,
  FormStyled,
  InputStyled,
  SelectStyled,
} from "../styles/FormsStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { ButtonStyled } from "../styles/GlobalStyles";
import { useNavigate } from "react-router-dom";

const MonitorSchema = Yup.object().shape({
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
  dni: Yup.string().min(5, "Cédula inválida").required("Cédula requerida"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  phone: Yup.string()
    .min(9, "Teléfono inválido")
    .required("Teléfono requerido"),
});

export const AddMonitors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DivForms>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          academic_program: "",
          semester: "",
          dni: "",
          email: "",
          phone: "",
        }}
        validationSchema={MonitorSchema}
        onSubmit={(values) => {
          dispatch(addMonitorAsync(values));
          navigate("/list-monitors");
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <FormStyled className="form flex-column d-flex gap-2">
            <h2 className="display-6 fs-2">Agregar monitor</h2>
            <FloatingLabel label="Nombre" className="inputLogin">
              <InputStyled
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <div className="error">{errors.name}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Apellido" className="inputLogin">
              <InputStyled
                type="text"
                name="lastName"
                placeholder="Ingresa tu apellido"
                onChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Programa académico" className="inputLogin">
              <SelectStyled
                name="academic_program"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Programa académico
                </option>
                {academic_programs.map((academic_program) => (
                  <option
                    key={academic_program.id}
                    value={academic_program.name}
                  >
                    {academic_program.name}
                  </option>
                ))}
              </SelectStyled>
              {errors.academic_program && touched.academic_program ? (
                <div className="error">{errors.academic_program}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Semestre" className="inputLogin">
              <SelectStyled name="semester" onChange={handleChange}>
                <option value="" selected disabled hidden>
                  Semestre
                </option>
                {semesters.map((semester) => (
                  <option key={semester.id} value={semester.name}>
                    {semester.name}
                  </option>
                ))}
              </SelectStyled>
              {errors.semester && touched.semester ? (
                <div className="error">{errors.semester}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Cédula" className="inputLogin">
              <InputStyled
                type="number"
                name="dni"
                placeholder="Ingresa tu cédula"
                onChange={handleChange}
                value={values.dni}
              />
              {errors.dni && touched.dni ? (
                <div className="error">{errors.dni}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Correo electrónico" className="inputLogin">
              <InputStyled
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Teléfono" className="inputLogin">
              <InputStyled
                type="tel"
                name="phone"
                placeholder="Ingresa tu teléfono"
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone && touched.phone ? (
                <div className="error">{errors.phone}</div>
              ) : null}
            </FloatingLabel>
            <ButtonStyled type="submit" onClick={handleSubmit}>
              Agregar
            </ButtonStyled>
          </FormStyled>
        )}
      </Formik>
    </DivForms>
  );
};
