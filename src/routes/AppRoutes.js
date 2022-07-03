import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddMonitors } from "../components/AddMonitors";
import { CreateMonitoring } from "../components/CreateMonitoring";
import { Monitoring } from "../components/Monitoring";
import { MonitorsList } from "../components/MonitorsList";
import { NavBars } from "../components/NavBars";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/add-monitors" element={<AddMonitors />} />
        <Route path="/list-monitors" element={<MonitorsList />} />
        <Route path="/create-monitoring" element={<CreateMonitoring />} />
        <Route path="/list-monitoring" element={<Monitoring />} />
      </Routes>
    </BrowserRouter>
  );
};
