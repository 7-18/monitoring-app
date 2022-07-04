import { FloatingLabel, Modal } from "react-bootstrap";
import { FormStyled } from "../styles/FormsStyles";
import { ModalButton } from "../styles/GlobalStyles";
import { EditInput } from "../styles/ListStyles";

export const EditMonitors = ({ show, handleClose, monitor }) => {
  console.log(monitor);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormStyled className="form flex-column d-flex gap-2 w-100">
          <FloatingLabel label="Nombre" className="inputLogin">
            <EditInput
              type="text"
              name="name"
              value={monitor.name}
              readOnly
            />
          </FloatingLabel>
        </FormStyled>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-3">
          <ModalButton className="edit">Actualizar</ModalButton>
          <ModalButton className="cancel" onClick={handleClose}>
            Cancelar
          </ModalButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
