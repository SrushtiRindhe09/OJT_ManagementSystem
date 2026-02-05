function OJTCard({ company, role, location, duration }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{company}</h2>
      <p className="text-sm text-slate-600">{role}</p>

      <div className="mt-3 text-sm text-slate-500 space-y-1">
        <p>📍 {location}</p>
        <p>⏱ {duration}</p>
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        Apply
      </button>
    </div>
  );
}

export default OJTCard;
