function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}

export default StatCard;
