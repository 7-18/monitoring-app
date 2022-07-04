import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { avatars } from "../data/avatar";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";
import { CardDiv, CardStyled } from "../styles/GlobalStyles";

const randomAvatar = () => {
  const random = Math.floor(Math.random() * avatars.length);
  return avatars[random];
};

export const MonitorsList = () => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  return (
    <CardDiv>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {monitors.map((monitor) => (
            <Col key={monitor.id}>
              <CardStyled>
                <img src={randomAvatar()} />
                <Card.Body>
                  <Card.Title className="text-center border-2 border-bottom">
                    {monitor.name} {monitor.lastName}
                  </Card.Title>
                  <ul>
                    <li>
                      <span>Email:</span>
                      {monitor.email}
                    </li>
                    <li>
                      <span>Teléfono:</span>
                      {monitor.phone}
                    </li>
                    <li>
                      <span>Programa académico:</span>
                      {monitor.academic_program}
                    </li>
                    <li>
                      <span>Semestre:</span>
                      {monitor.semester}
                    </li>
                    <li>
                      <span>Cédula:</span>
                      {monitor.id}
                    </li>
                  </ul>
                </Card.Body>
              </CardStyled>
            </Col>
          ))}
        </Row>
      </Container>
    </CardDiv>
  );
};
