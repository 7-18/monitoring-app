import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonitorsAsync } from "../redux/actions/actionMonitors";

export const MonitorsList = () => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);

  console.log(monitors);

  useEffect(() => {
    dispatch(getMonitorsAsync());
  }, []);

  return (
    <div>
      <div>Lista de Monitores</div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Programa Académico</th>
            <th>Semestre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Cédula</th>
          </tr>
        </thead>
        <tbody>
          {monitors.map((monitor) => (
            <tr key={monitor.id}>
              <td>{monitor.name}</td>
              <td>{monitor.lastName}</td>
              <td>{monitor.academic_program}</td>
              <td>{monitor.semester}</td>
              <td>{monitor.email}</td>
              <td>{monitor.phone}</td>
              <td>{monitor.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
