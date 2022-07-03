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

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <DivLogin>
      <FormLogin>
        <img src={logo} width={130} height={130} />
        <FloatingLabel label="CORREO ELECTRÓNICO" className="inputLogin">
          <InputLogin
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
          />
        </FloatingLabel>
        <FloatingLabel label="CONTRASEÑA" className="inputLogin">
          <InputLogin
            type="password"
            name="password"
            placeholder="contraseña"
          />
        </FloatingLabel>
        <ButtonLogin type="submit">Login</ButtonLogin>
        <small>¿Olvidaste tu contraseña?</small>
        <SignWithAnother>
          <div>
            <div></div>
            <span>o</span>
            <div></div>
          </div>
          <span>Inicia sesión con</span>
        </SignWithAnother>
        <SignInWithButton>
          <button onClick={() => dispatch(loginGoogle())}>
            <img src={google} alt="google" />
          </button>
          <div className="vertical"></div>
          <button>
            <img
              src={facebook}
              alt="facebook"
              onClick={() => dispatch(loginFacebook())}
            />
          </button>
        </SignInWithButton>
      </FormLogin>
    </DivLogin>
  );
};
