import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>🏠 Home Page</h1>

      <p>Welcome to Smart Timetable Management System.</p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/login">
          <button
            style={{
              padding: "12px 30px",
              marginRight: "20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              padding: "12px 30px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;