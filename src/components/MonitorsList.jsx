import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { avatars } from "../data/avatar";
import {
  deleteMonitorAsync,
  getMonitorsAsync,
} from "../redux/actions/actionMonitors";
import { CardDiv, CardStyled } from "../styles/GlobalStyles";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { NotFound } from "./NotFound";

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

  const handleDelete = (email) => {
    dispatch(deleteMonitorAsync(email));
  };

  return (
    <CardDiv>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {monitors.length > 0 ? (
            <>
              {monitors.map((monitor) => (
                <Col key={monitor.id}>
                  <CardStyled>
                    <MdModeEditOutline className="edit" />
                    <FaTrash
                      className="delete"
                      onClick={() => handleDelete(monitor.email)}
                    />
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
            </>
          ) : (
            <NotFound text={"No hay monitores registrados"} />
          )}
        </Row>
      </Container>
    </CardDiv>
  );
};
