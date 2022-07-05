import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMonitoringAsync,
  getMonitoringAsync,
} from "../redux/actions/actionMonitoring";
import { SubjectsCard } from "../styles/ListStyles";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { CardDiv } from "../styles/GlobalStyles";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NotFound } from "./NotFound";
import { EditMonitoring } from "./EditMonitoring";

export const Monitoring = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getMonitoringAsync());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMonitoringAsync(id));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [monitoring, setMonitoring] = useState({});

  const handleEdit = (monitorias) => {
    setMonitoring(monitorias);
    handleShow();
  };

  return (
    <CardDiv>
      <Container>
        <Row xs={4} md={3} sm={2} className="g-4">
          {subjects.length > 0 ? (
            <>
              {subjects.map((monitorias) => (
                <Col key={monitorias.id}>
                  <SubjectsCard className={monitorias.subject}>
                    <MdModeEditOutline
                      className="edit"
                      onClick={() => handleEdit(monitorias)}
                    />
                    <FaTrash
                      className="delete"
                      onClick={() => handleDelete(monitorias.id)}
                    />
                    <Card.Body>
                      <Card.Title className="text-center text-uppercase border-2 border-bottom">
                        {monitorias.subject}
                      </Card.Title>
                      <ul>
                        <li>
                          <span>Monitor:</span>
                          {monitorias.monitor}
                        </li>
                        <li>
                          <span>Fecha:</span>
                          {monitorias.date}
                        </li>
                        <li>
                          <span>Salón:</span>
                          {monitorias.classroom}
                        </li>
                      </ul>
                    </Card.Body>
                  </SubjectsCard>
                </Col>
              ))}
            </>
          ) : (
            <NotFound
              text={"Lista de monitorías vacía"}
              navigation={"/create-monitoring"}
              add={"Crear monitorías"}
            />
          )}
        </Row>
        <EditMonitoring
          show={show}
          handleClose={handleClose}
          monitorias={monitoring}
        />
      </Container>
    </CardDiv>
  );
};
