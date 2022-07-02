import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { addMonitoringAsync } from "../redux/actions/actionMonitoring";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";

export const CreateMonitoring = () => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);
  const [formValues, handleInputChange, reset] = useForm({
    subject: "",
    monitor: "",
    monitor_id: "",
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
        <label htmlFor="subject">Materia</label>
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={handleInputChange}
          value={formValues.subject}
        />
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
        <label htmlFor="classroom">Salón de clases</label>
        <input
          type="text"
          name="classroom"
          id="classroom"
          onChange={handleInputChange}
          value={formValues.classroom}
        />
        <Button type="submit">Crear</Button>
      </form>
    </div>
  );
};
