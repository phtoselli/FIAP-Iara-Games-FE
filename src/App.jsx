import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/Dashboard";
import Home from "./modules/Home";
import Login from "./modules/Login";
import NotFound from "./modules/NotFound";
import Register from "./modules/Register";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}
