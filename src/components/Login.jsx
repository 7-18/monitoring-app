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
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(loginUserAsync(formValues));
    reset();
  };

  return (
    <DivLogin>
      <FormLogin onSubmit={handleSubmit}>
        <img src={logo} width={130} height={130} />
        <FloatingLabel label="Correo electrónico" className="inputLogin">
          <InputLogin
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            onChange={handleInputChange}
            value={formValues.email}
          />
        </FloatingLabel>
        <FloatingLabel label="Contraseña" className="inputLogin">
          <InputLogin
            type="password"
            name="password"
            placeholder="contraseña"
            onChange={handleInputChange}
            value={formValues.password}
          />
        </FloatingLabel>
        <ButtonLogin type="submit" onClick={handleSubmit}>Ingresar</ButtonLogin>
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
          <button>
            <img
              src={facebook}
              alt="facebook"
              onClick={() => dispatch(loginFacebook())}
            />
            <span>Continuar con Facebook</span>
          </button>
        </SignInWithButton>
        <small>
          ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
        </small>
      </FormLogin>
    </DivLogin>
  );
};
