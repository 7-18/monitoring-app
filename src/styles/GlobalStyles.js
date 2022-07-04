import { Card } from "react-bootstrap";
import styled from "styled-components";

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
