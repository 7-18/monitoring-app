import { Form } from "react-bootstrap";
import styled from "styled-components";

export const DivLogin = styled.div`
  background-color: #0d1b45;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233265FF' stroke-width='4.8'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%232F61FF'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 40px;

  & > img {
    margin-bottom: 20px;
  }

  & > small > a {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 5px;
  }
`;

export const InputLogin = styled(Form.Control)`
  border: 1px solid #ffffff !important;
  border-radius: 4px;
  background-color: transparent !important;
  box-shadow: none !important;

  &::placeholder {
    color: #ffffff;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    color: #ffffff;
  }
`;

export const ButtonLogin = styled.button`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  border-radius: 30px;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  color: #2148c0;
  padding: 10px;
  margin: 20px 20px 10px;
  transition: 0.3s;
  width: 100%;

  &:focus,
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background: #2f61ff;
    color: #ffffff;
  }
`;

export const SignWithAnother = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  & > span {
    font-weight: bold;
  }
`;

export const SignInWithButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > button {
    background-color: #ffffff;
    padding: 8px 10px;
    border-radius: 30px;
    outline: none;
    border: none;
    &:hover,
    &:focus,
    &:active {
      transform: scale(1.01);
    }

    & > span {
      font-weight: bold;
      color: #2148c0;
      margin-left: 10px;
      font-size: 12px;
    }
  }
  & > img {
    width: 25px;
    height: 25px;
  }
  & > .vertical {
    border: 1px solid #ffffff;
    transform: rotate(90deg);
    width: 29px;
    height: 0px;
  }
`;
