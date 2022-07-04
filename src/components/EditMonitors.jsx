import { Modal } from "react-bootstrap";
import { ModalButton } from "../styles/GlobalStyles";

export const EditMonitors = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-3">
          <ModalButton className="edit">Actualizar</ModalButton>
          <ModalButton className="cancel" onClick={handleClose}>Cancelar</ModalButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
