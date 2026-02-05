import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import StudentLayout from "../components/layout/StudentLayout";
import StudentDashboard from "../pages/student/Dashboard";
import StudentOJT from "../pages/student/OJT";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="ojt" element={<StudentOJT />} />
       
      </Route>
    </Routes>
  );
}

export default AppRoutes;


