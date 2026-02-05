import { useState } from "react";

function StudentOJTBrowsing() {

  const ojtList = [
    { id: 1, company: "Google", role: "Frontend Intern" },
    { id: 2, company: "Microsoft", role: "Backend Intern" },
    { id: 3, company: "Amazon", role: "Cloud Intern" }
  ];

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function applyForOJT(companyName) {
    setLoading(true);
    setMessage("");

    // Simulate backend delay
    setTimeout(function () {
      setLoading(false);
      setMessage("Applied for OJT at " + companyName);
    }, 2000);
  }

  return (
    <div>
      <h2>Student OJT Browsing Page</h2>
      <p>Here student will see all OJT opportunities.</p>

      {message && (
        <p className="mb-4 text-green-600 font-semibold">
          {message}
        </p>
      )}

      {ojtList.map(function (ojt) {
        return (
          <div
            key={ojt.id}
            className="border p-4 mb-4"
          >
            <h3 className="text-lg font-bold">{ojt.company}</h3>
            <p>{ojt.role}</p>

            <button
              className="mt-3 px-4 py-2 bg-blue-600 text-white"
              onClick={function () {
                applyForOJT(ojt.company);
              }}
              disabled={loading}
            >
              {loading ? "Applying..." : "Apply"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default StudentOJTBrowsing;
