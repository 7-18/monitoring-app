import { Card } from "react-bootstrap";
import styled from "styled-components";
import { ButtonLogin } from "./LoginStyles";

export const SpanLogo = styled.span`
  text-align: center;
  opacity: 0.7;
  user-select: none;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;

export const CardDiv = styled.div`
  padding: 30px;
`;

export const CardStyled = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    .delete, .edit {
      opacity: 1;
    }
  }

  & > .delete, & > .edit {
    position: absolute;
    top: 20px;
    cursor: pointer;
    opacity: 0;
    transition: 0.5s;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 40px;
    padding: 0 10px;
  }

  & > .delete {
    right: 10px;
    color: #BB2D3B;

    &:hover {
      box-shadow: 4px 4px rgba(0, 0, 0, 0.3);
    }
  }

  & > .edit {
    left: 10px;
    color: #FFCA2C;

    &:hover {
      box-shadow: -4px 4px rgba(0, 0, 0, 0.3);
    }
  }

  & > img {
    width: 100px;
    height: 100px;
  }

  & > div > ul {
    list-style: circle;
    margin-top: 20px;

    & > li {
      color: #000000;
      font-size: 12px;
      margin-bottom: 5px;

      & > span {
        margin-right: 5px;
        font-weight: bold;
      }
  }
`;

export const ButtonStyled = styled(ButtonLogin)`
  box-shadow: none;
  border-color: #2f61ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-left: 20px;
    font-size: 30px;
  }
`;

export const FilterButton = styled(ButtonStyled)`
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    color: #ffffff !important;
  }
  &:active {
    transform: scale(1.1);
  }

  &.Matemáticas {
    color: #7d6608;
    border-color: #7d6608;

    &:hover {
      background-color: #7d6608;
    }
  }

  &.Lenguaje {
    color: #b03a2e;
    border-color: #b03a2e;

    &:hover {
      background-color: #b03a2e;
    }
  }

  &.Lógica {
    color: #154360;
    border-color: #154360;

    &:hover {
      background-color: #154360;
    }
  }

  &.Programación {
    color: #1b2631;
    border-color: #1b2631;

    &:hover {
      background-color: #1b2631;
    }
  }

  &.Salud {
    color: #186a3b;
    border-color: #186a3b;

    &:hover {
      background-color: #186a3b;
    }
  }

  &.Anatomía {
    color: #f1948a;
    border-color: #f1948a;

    &:hover {
      background-color: #f1948a;
    }
  }

  &.Historia {
    color: #566573;
    border-color: #566573;

    &:hover {
      background-color: #566573;
    }
  }

  &.Dibujo {
    color: #48c9b0;
    border-color: #48c9b0;

    &:hover {
      background-color: #48c9b0;
    }
  }

  &.Física {
    color: #d35400;
    border-color: #d35400;

    &:hover {
      background-color: #d35400;
    }
  }

  &.Química {
    color: #f1c40f;
    border-color: #f1c40f;

    &:hover {
      background-color: #f1c40f;
    }
  }

  &.Biología {
    color: #2ecc71;
    border-color: #2ecc71;

    &:hover {
      background-color: #2ecc71;
    }
  }

  &.Geografía {
    color: #e74c3c;
    border-color: #e74c3c;

    &:hover {
      background-color: #e74c3c;
    }
  }

  &.Filosofía {
    color: #4a235a;
    border-color: #4a235a;

    &:hover {
      background-color: #4a235a;
    }
  }

  &.Inglés {
    color: #2471A3;
    border-color: #2471A3;

    &:hover {
      background-color: #2471A3;
    }
  }

  &.Extracurricular {
    color: #000000;
    border-color: #000000;

    &:hover {
      background-color: #000000;
    }
  }
`;
