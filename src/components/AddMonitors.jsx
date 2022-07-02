import { Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { addMonitorAsync } from "../redux/actions/actionMonitors";

export const AddMonitors = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    lastName: "",
    academic_program: "",
    semester: "",
    id: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(addMonitorAsync(formValues));
    reset();
  };

  return (
    <div>
      <div>Agregar monitor</div>
      <form onSubmit={handleSubmit} className="form flex-column d-flex gap-2">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={formValues.name}
        />
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleInputChange}
          value={formValues.lastName}
        />
        <label htmlFor="academic_program">Programa Académico</label>
        <input
          type="text"
          name="academic_program"
          id="academic_program"
          onChange={handleInputChange}
          value={formValues.academic_program}
        />
        <label htmlFor="semester">Semestre</label>
        <input
          type="text"
          name="semester"
          id="semester"
          onChange={handleInputChange}
          value={formValues.semester}
          maxLength="2"
          minLength="1"
        />
        <label htmlFor="id">Cédula</label>
        <input
          type="number"
          name="id"
          id="id"
          onChange={handleInputChange}
          value={formValues.id}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formValues.email}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          onChange={handleInputChange}
          value={formValues.phone}
        />
        <Button type="submit">Agregar</Button>
      </form>
    </div>
  );
};
