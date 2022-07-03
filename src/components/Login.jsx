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
import { loginFacebook, loginGoogle } from "../redux/actions/actionUser";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <DivLogin>
      <FormLogin>
        <img src={logo} width={130} height={130} />
        <FloatingLabel label="Correo electrónico" className="inputLogin">
          <InputLogin
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
          />
        </FloatingLabel>
        <FloatingLabel label="Contraseña" className="inputLogin">
          <InputLogin
            type="password"
            name="password"
            placeholder="contraseña"
          />
        </FloatingLabel>
        <ButtonLogin type="submit">Ingresar</ButtonLogin>
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
        <small>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></small>
      </FormLogin>
    </DivLogin>
  );
};
