import { Form } from "react-bootstrap";
import styled from "styled-components";
import { FormLogin, InputLogin } from "./LoginStyles";

export const DivForms = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const FormStyled = styled(FormLogin)`
  width: 800px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
`;

export const SelectStyled = styled(Form.Select)`
  border: 1px solid #000 !important;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1) !important;
  box-shadow: none !important;
  color: #000;
  width: 100%;

  &::placeholder {
    color: #000;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    color: #000;
  }
`;

export const InputStyled = styled(InputLogin)`
  border-color: #000000 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  color: #000 !important;

  &::placeholder,
  &:focus {
    color: #000;
  }
`;
