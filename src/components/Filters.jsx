import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FilterButton } from "../styles/GlobalStyles";
import { SubjectsCard } from "../styles/ListStyles";
import { NotFound } from "./NotFound";

export const Filters = ({ show, handleClose, subjects, id }) => {
  const subjectFiltered = subjects.filter((subject) => subject.subject === id);
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
              <Row xs={1} md={2} sm={2} className="g-4">
                {subjectFiltered.map((monitorias) => (
                  <Col key={monitorias.id}>
                    <SubjectsCard className={monitorias.subject}>
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
