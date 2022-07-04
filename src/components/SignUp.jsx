import {
  ButtonLogin,
  DivLogin,
  FormLogin,
  InputLogin,
  SignInWithButton,
  SignWithAnother,
} from "../styles/LoginStyles";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import { FloatingLabel } from "react-bootstrap";
import {
  loginFacebook,
  loginGoogle,
  registerUserAsync,
} from "../redux/actions/actionUser";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nombre muy corto")
    .max(20, "Nombre muy largo")
    .required("Nombre requerido"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "Contraseña muy corta")
    .max(20, "Contraseña muy larga")
    .required("Contraseña requerida"),
});

export const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <DivLogin>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          dispatch(
            registerUserAsync(values.name, values.email, values.password)
          );
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <FormLogin>
            <img src={logo} width={130} height={130} />
            <FloatingLabel label="Nombre y apellido" className="inputLogin">
              <InputLogin
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
            <FloatingLabel label="Correo electrónico" className="inputLogin">
              <InputLogin
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </FloatingLabel>
            <FloatingLabel label="Contraseña" className="inputLogin">
              <InputLogin
                type="password"
                name="password"
                placeholder="contraseña"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </FloatingLabel>
            <ButtonLogin type="submit" onClick={handleSubmit}>
              Registrarte
            </ButtonLogin>
            <SignWithAnother>
              <span>o</span>
            </SignWithAnother>
            <SignInWithButton>
              <button type="button" onClick={() => dispatch(loginGoogle())}>
                <img src={google} alt="google" />
                <span>Registro con Google</span>
              </button>
              <div className="vertical"></div>
              <button type="button" onClick={() => dispatch(loginFacebook())}>
                <img src={facebook} alt="facebook" />
                <span>Registro con Facebook</span>
              </button>
            </SignInWithButton>
            <small>
              ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
            </small>
          </FormLogin>
        )}
      </Formik>
    </DivLogin>
  );
};
