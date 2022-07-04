import styled from "styled-components";
import { CardStyled } from "./GlobalStyles";

export const SubjectsCard = styled(CardStyled)`
  box-shadow: none;
  &.Matemáticas {
    border-color: yellow;
  }

  &.Lenguaje {
    border-color: red;
  }

  &.Lógica {
    border-color: blue;
  }

  &.Programación {
    border-color: #1b2631;
  }

  &.Salud {
    border-color: green;
  }

  &.Anatomía {
    border-color: pink;
  }

  &.Historia {
    border-color: #566573;
  }

  &.Dibujo {
    border-color: aqua;
  }

  &.Física {
    border-color: orange;
  }

  &.Química {
    border-color: yellow;
  }

  &.Biología {
    border-color: #2ecc71;
  }

  &.Geografía {
    border-color: #e74c3c;
  }

  &.Filosofía {
    border-color: fuchsia;
  }

  &.Inglés {
    border-color: #2471a3;
  }

  &.Extracurricular {
    border-color: #000000;
  }
`;
