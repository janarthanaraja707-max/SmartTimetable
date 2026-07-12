import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
          backgroundColor: "#f4f6f9",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#1e3a8a" }}>👨‍💼 Admin Dashboard</h1>

        <p>Welcome to Smart Timetable Management System</p>

        <hr />

        {/* Dashboard Cards */}

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {/* Students */}

          <div
            style={{
              width: "220px",
              background: "#2563eb",
              color: "white",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h2>👨‍🎓 Students</h2>

            <h1>250</h1>
          </div>

          {/* Faculty */}

          <div
            style={{
              width: "220px",
              background: "#10b981",
              color: "white",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h2>👨‍🏫 Faculty</h2>

            <h1>35</h1>
          </div>

          {/* Subjects */}

          <div
            style={{
              width: "220px",
              background: "#f59e0b",
              color: "white",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h2>📚 Subjects</h2>

            <h1>42</h1>
          </div>

          {/* Classrooms */}

          <div
            style={{
              width: "220px",
              background: "#ef4444",
              color: "white",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h2>🏫 Classrooms</h2>

            <h1>18</h1>
          </div>
        </div>

        {/* Quick Actions */}

        <div style={{ marginTop: "40px" }}>
          <h2>Quick Actions</h2>

          <button
            style={{
              padding: "12px 25px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginRight: "15px",
              cursor: "pointer",
            }}
          >
            ➕ Add Timetable
          </button>

          <button
            style={{
              padding: "12px 25px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginRight: "15px",
              cursor: "pointer",
            }}
          >
            👨‍🏫 Add Faculty
          </button>

          <button
            style={{
              padding: "12px 25px",
              background: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            👨‍🎓 Add Student
          </button>
        </div>

        {/* Recent Activity */}

        <div
          style={{
            marginTop: "50px",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>📋 Recent Activities</h2>

          <ul>
            <li>✅ Timetable updated for IT Department.</li>
            <li>✅ New Faculty added.</li>
            <li>✅ Semester 5 timetable published.</li>
            <li>✅ Classroom allocation completed.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;