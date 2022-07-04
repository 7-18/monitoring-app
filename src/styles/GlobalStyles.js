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
