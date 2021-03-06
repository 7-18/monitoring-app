import { useEffect, useState } from "react";
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
import { EditMonitors } from "./EditMonitors";

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

  const handleDelete = (dni) => {
    dispatch(deleteMonitorAsync(dni));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [monitor, setMonitor] = useState({});

  const handleEdit = (monitor) => {
    setMonitor(monitor);
    handleShow();
  };

  return (
    <CardDiv>
      <Container>
        <Row xs={4} md={3} sm={2} className="g-4">
          {monitors.length > 0 ? (
            <>
              {monitors.map((monitor) => (
                <Col key={monitor.id}>
                  <CardStyled>
                    <MdModeEditOutline
                      className="edit"
                      onClick={() => handleEdit(monitor)}
                    />
                    <FaTrash
                      className="delete"
                      onClick={() => handleDelete(monitor.dni)}
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
                          <span>Tel??fono:</span>
                          {monitor.phone}
                        </li>
                        <li>
                          <span>Programa acad??mico:</span>
                          {monitor.academic_program}
                        </li>
                        <li>
                          <span>Semestre:</span>
                          {monitor.semester}
                        </li>
                        <li>
                          <span>C??dula:</span>
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
              text={"No hay monitores registrados"}
              navigation={"/add-monitors"}
              add={"Agregar monitores"}
            />
          )}
        </Row>
        <EditMonitors show={show} handleClose={handleClose} monitor={monitor} />
      </Container>
    </CardDiv>
  );
};
