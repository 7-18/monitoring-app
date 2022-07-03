import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { classrooms, class_subjects } from "../data/data";
import { useForm } from "../hooks/useForm";
import { addMonitoringAsync } from "../redux/actions/actionMonitoring";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";

export const CreateMonitoring = () => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);
  const [formValues, handleInputChange, reset] = useForm({
    subject: "",
    monitor: "",
    date: "",
    classroom: "",
  });

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(addMonitoringAsync(formValues));
    reset();
  };

  return (
    <div>
      <div>Crear monitorías</div>
      <form onSubmit={handleSubmit} className="form flex-column d-flex gap-2">
        <select name="subject" id="subject" onChange={handleInputChange}>
          <option value="">Seleccione una materia</option>
          {class_subjects.map((subject) => (
            <option key={subject.id} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
        <select name="monitor" id="monitor" onChange={handleInputChange}>
          <option value="*">Seleccione un monitor</option>
          {monitors.map((monitor) => (
            <option
              key={monitor.id}
              value={monitor.name + " " + monitor.lastName}
            >
              {monitor.name} {monitor.lastName}
            </option>
          ))}
        </select>
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleInputChange}
          value={formValues.date}
        />
        <select name="classroom" id="classroom" onChange={handleInputChange}>
          <option value="*">Seleccione el salón de clases</option>
          {classrooms.map((classroom) => (
            <option key={classroom.id} value={classroom.name}>
              {classroom.name}
            </option>
          ))}
        </select>
        <Button type="submit">Crear</Button>
      </form>
    </div>
  );
};
