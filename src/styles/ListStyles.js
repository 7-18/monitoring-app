import styled from "styled-components";
import { InputStyled, SelectStyled } from "./FormsStyles";
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

export const EditInput = styled(InputStyled)`
  background-color: #ffffff !important;
  border-color: rgba(0, 0, 0) !important;
  &:focus {
    background-color: #ffffff;
  }
  &:disabled {
    border-color: rgba(200, 200, 200) !important;
  }
`;

export const EditSelect = styled(SelectStyled)`
  background-color: #ffffff !important;
  border-color: rgba(0, 0, 0) !important;
  &:focus {
    background-color: #ffffff;
  }
  &:disabled {
    border-color: rgba(200, 200, 200) !important;
  }
`;
