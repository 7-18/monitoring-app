import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { class_subjects } from "../data/data";
import { getMonitoringAsync } from "../redux/actions/actionMonitoring";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";
import { FilterButton } from "../styles/GlobalStyles";
import { Filters } from "./Filters";

export const AllSubjects = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subjects);
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(getMonitoringAsync());
  }, []);

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [subjectId, setSubjectId] = useState("");

  const getSubjectName = ({ target }) => {
    handleShow();
    setSubjectId(target.id);
  };

  return (
    <Container className="my-lg-5">
      <div className="d-flex justify-content-center">
        <h2 className="text-center display-6 border-2 border-bottom w-50 mb-4">
          Elige la materia
        </h2>
      </div>
      <Row xs={1} lg={5} sm={2} className="g-3">
        {class_subjects.map((subject) => (
          <Col key={subject.id}>
            <FilterButton
              className={subject.name}
              onClick={getSubjectName}
              id={subject.name}
            >
              {subject.name}
            </FilterButton>
          </Col>
        ))}
      </Row>
      <Filters
        show={show}
        handleClose={handleClose}
        id={subjectId}
        subjects={subjects}
        monitors={monitors}
      />
    </Container>
  );
};
