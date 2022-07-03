import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonitoringAsync } from "../redux/actions/actionMonitoring";

export const Monitoring = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getMonitoringAsync());
  }, []);

  return (
    <div>
      <div>Monitorías</div>
      <ol>
        {subjects.map((subject) => (
          <li key={subject.subject}>
            {subject.subject}, {subject.monitor}
          </li>
        ))}
      </ol>
    </div>
  );
};
