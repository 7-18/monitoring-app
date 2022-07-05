import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { avatars } from "../data/avatar";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";
import { CardDiv, CardStyled } from "../styles/GlobalStyles";
import { NotFound } from "./NotFound";

const randomAvatar = () => {
  const random = Math.floor(Math.random() * avatars.length);
  return avatars[random];
};

export const List = ({ search }) => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  const filteredMonitors = monitors.filter((monitor) => {
    return monitor.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <CardDiv>
      <Container>
        <Row xs="auto" className="g-4">
          {filteredMonitors.length > 0 ? (
            <>
              {filteredMonitors.map((monitor) => (
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
                          {monitor.dni}
                        </li>
                      </ul>
                    </Card.Body>
                  </CardStyled>
                </Col>
              ))}
            </>
          ) : (
            <NotFound
              text={
                "No hay monitores registrados con este nombre. Revisa la lista de monitores"
              }
              navigation={"/list-monitors"}
              add={"Lista de monitores"}
            />
          )}
        </Row>
      </Container>
    </CardDiv>
  );
};
