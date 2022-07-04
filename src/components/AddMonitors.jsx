import { FloatingLabel } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
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

const MonitorsSchema = Yup.object().shape({
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

export const AddMonitors = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    lastName: "",
    academic_program: "",
    semester: "",
    id: "",
    email: "",
    phone: "",
  });

  return (
    <DivForms>
      <Formik
        initialValues={formValues}
        validationSchema={monitorsSchema}
        onSubmit={(values) => {
          dispatch(addMonitorAsync(formValues));
          reset();
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <FormStyled className="form flex-column d-flex gap-2">
            <h2 className="display-6 fs-2">Agregar monitor</h2>
            <FloatingLabel label="Nombre" className="inputLogin">
              <InputStyled
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                onChange={handleInputChange}
                value={formValues.name}
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
                onChange={handleInputChange}
                value={formValues.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Programa académico" className="inputLogin">
              <SelectStyled
                name="academic_program"
                onChange={handleInputChange}
              >
                <option value="">
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
              <SelectStyled name="semester" onChange={handleInputChange}>
                <option value="">
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
                name="id"
                placeholder="Ingresa tu cédula"
                onChange={handleInputChange}
                value={formValues.id}
              />
              {errors.id && touched.id ? (
                <div className="error">{errors.id}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Correo electrónico" className="inputLogin">
              <InputStyled
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                onChange={handleInputChange}
                value={formValues.email}
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
                onChange={handleInputChange}
                value={formValues.phone}
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
