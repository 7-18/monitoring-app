import { Route, Routes } from "react-router-dom";
import { AddMonitors } from "../components/AddMonitors";
import { CreateMonitoring } from "../components/CreateMonitoring";
import { Monitoring } from "../components/Monitoring";
import { MonitorsList } from "../components/MonitorsList";
import { NavBars } from "../components/NavBars";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/add-monitors" element={<AddMonitors />} />
        <Route path="/list-monitors" element={<MonitorsList />} />
        <Route path="/create-monitoring" element={<CreateMonitoring />} />
        <Route path="/list-monitoring" element={<Monitoring />} />
      </Routes>
    </>
  );
};
