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
      <h1>Monitoring</h1>
    </div>
  );
};
