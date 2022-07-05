import React from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FilterButton } from "../styles/GlobalStyles";
import { SubjectsCard } from "../styles/ListStyles";
import { NotFound } from "./NotFound";

export const Filters = ({ show, handleClose, subjects, id, monitors }) => {
  const subjectFiltered = subjects.filter((subject) => subject.subject === id);
  const monitorFind = subjectFiltered.map((subject) =>
    monitors.find((monitor) => subject.monitor.includes(monitor.name))
  );
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Monitorías</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {subjectFiltered.length > 0 ? (
            <>
              <Row xs={1} className="g-4">
                {subjectFiltered.map((monitorias) => (
                  <Col key={monitorias.id}>
                    <SubjectsCard className={monitorias.subject}>
                      <Card.Body>
                        <Card.Title className="text-center text-uppercase border-2 border-bottom">
                          {monitorias.subject}
                        </Card.Title>
                        <ul>
                          <li className="fs-6">
                            <span>Monitor:</span>
                            {monitorias.monitor}
                          </li>
                          {monitorFind.map((monitor) => (
                            <React.Fragment key={monitor.id}>
                              <li className="ms-3">
                                <span>Email:</span>
                                {monitor.email}
                              </li>
                              <li className="ms-3">
                                <span>Teléfono:</span>
                                {monitor.phone}
                              </li>
                              <li className="ms-3">
                                <span>Cédula:</span>
                                {monitor.dni}
                              </li>
                              <li className="ms-3">
                                <span>Programa académico</span>
                                {monitor.program}
                              </li>
                              <li className="ms-3">
                                <span>Semestre:</span>
                                {monitor.semester}
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                      </Card.Body>
                    </SubjectsCard>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <NotFound
              text={"No se han creado monitorías de esta materia"}
              navigation={"/create-monitoring"}
              add={"Crear monitorías"}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <FilterButton onClick={() => navigate("/list-monitoring")}>
              Lista de monitorías
            </FilterButton>
            <FilterButton onClick={() => navigate("/list-monitors")}>
              Lista de monitores
            </FilterButton>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
