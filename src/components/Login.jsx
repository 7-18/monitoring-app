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
  loginUserAsync,
} from "../redux/actions/actionUser";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "Contraseña muy corta")
    .max(20, "Contraseña muy larga")
    .required("Contraseña requerida"),
});

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <DivLogin>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          dispatch(loginUserAsync(values.email, values.password));
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <FormLogin onSubmit={handleSubmit}>
            <img src={logo} width={130} height={130} />
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
              Ingresar
            </ButtonLogin>
            <small>¿Olvidaste tu contraseña?</small>
            <SignWithAnother>
              <span>o</span>
            </SignWithAnother>
            <SignInWithButton>
              <button onClick={() => dispatch(loginGoogle())}>
                <img src={google} alt="google" />
                <span>Continuar con Google</span>
              </button>
              <div className="vertical"></div>
              <button onClick={() => dispatch(loginFacebook())}>
                <img src={facebook} alt="facebook" />
                <span>Continuar con Facebook</span>
              </button>
            </SignInWithButton>
            <small>
              ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </small>
          </FormLogin>
        )}
      </Formik>
    </DivLogin>
  );
};
