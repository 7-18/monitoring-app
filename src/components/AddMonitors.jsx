import { Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { addMonitorAsync } from "../redux/actions/actionMonitors";
import { academic_programs, semesters } from "../data/data";

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
          <select
            name="academic_program"
            id="academic_program"
            onChange={handleInputChange}
          >
            <option value="">Programa académico</option>
            {academic_programs.map((academic_program) => (
              <option key={academic_program.id} value={academic_program.name}>
                {academic_program.name}
              </option>
            ))}
          </select>
          <select name="semester" id="semester" onChange={handleInputChange}>
            <option value="">Semestre</option>
            {semesters.map((semester) => (
              <option key={semester.id} value={semester.name}>
                {semester.name}
              </option>
            ))}
          </select>
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
          <Button type="submit" onClick={handleSubmit}>
            Agregar
          </Button>
        </form>
      </div>
  );
};
