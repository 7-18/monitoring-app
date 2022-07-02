import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddMonitors } from "../components/AddMonitors";
import { CreateMonitoring } from "../components/CreateMonitoring";
import { NavBars } from "../components/NavBars";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/monitors" element={<AddMonitors />} />
        <Route path="/monitoring" element={<CreateMonitoring />} />
      </Routes>
    </BrowserRouter>
  );
};
