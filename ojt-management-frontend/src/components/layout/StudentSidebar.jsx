import { NavLink } from "react-router-dom";

function StudentSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="p-4 text-xl font-bold border-b">
        OJT Portal
      </div>

      <nav className="p-4 space-y-2">
        <NavLink
          to="/student/dashboard"
          className="block px-3 py-2 rounded hover:bg-slate-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/student/ojt"
          className="block px-3 py-2 rounded hover:bg-slate-100"
        >
          Browse OJT
        </NavLink>

        <NavLink
          to="/student/applications"
          className="block px-3 py-2 rounded hover:bg-slate-100"
        >
          Applications
        </NavLink>

        <NavLink
          to="/student/attendance"
          className="block px-3 py-2 rounded hover:bg-slate-100"
        >
          Attendance
        </NavLink>

        <NavLink
          to="/student/profile"
          className="block px-3 py-2 rounded hover:bg-slate-100"
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default StudentSidebar;
