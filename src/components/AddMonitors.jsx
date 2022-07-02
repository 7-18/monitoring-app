import { Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

export const AddMonitors = () => {
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    lastName: "",
    academic_program: "",
    semester: "",
    id: "",
    email: "",
    phone: "",
  });
  return (
    <div>
      <div>Agregar monitor</div>
      <div>Agrega un monitor para las clases.</div>
      <div>
        <Button>Agregar</Button>
      </div>
    </div>
  );
};
