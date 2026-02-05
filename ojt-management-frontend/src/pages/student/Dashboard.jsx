import StatCard from "../../components/ui/StatCard";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total OJT" value="12" />
        <StatCard title="Applied" value="5" />
        <StatCard title="Ongoing" value="2" />
        <StatCard title="Completed" value="1" />
      </div>
    </div>
  );
}
