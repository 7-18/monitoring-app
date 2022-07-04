import { Container } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../styles/GlobalStyles";
import { Spin } from "./Spin";

export const NotFound = ({ text }) => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center display-6">{text}</h2>
      <ButtonStyled onClick={() => navigate("/add-monitors")}>
        Agregar monitores <AiFillPlusCircle />
      </ButtonStyled>
      <Spin heightPx={"20vh"} />
    </Container>
  );
};
