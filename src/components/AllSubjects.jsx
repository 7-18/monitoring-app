import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { class_subjects } from "../data/data";
import { getMonitoringAsync } from "../redux/actions/actionMonitoring";
import { FilterButton } from "../styles/GlobalStyles";

export const AllSubjects = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getMonitoringAsync());
  }, []);

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
            <FilterButton className={subject.name}>{subject.name}</FilterButton>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
