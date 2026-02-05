import { Outlet } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
<Route path="ojt" element={<StudentOJT />} />


function StudentLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <StudentSidebar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayout;

