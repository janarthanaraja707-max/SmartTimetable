import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

  };

  return (

    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e3a8a",
        color: "white",
        position: "fixed",
        left: 0,
        top: 70,
        padding: "20px",
      }}
    >

      <h2 style={{ textAlign: "center" }}>
        📅 Smart Timetable
      </h2>

      <hr />

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/admin"
            style={{ color: "white", textDecoration: "none" }}
          >
            🏠 Dashboard
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/students"
            style={{ color: "white", textDecoration: "none" }}
          >
            👨‍🎓 Students
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/add-student"
            style={{ color: "white", textDecoration: "none" }}
          >
            ➕ Add Student
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/faculty"
            style={{ color: "white", textDecoration: "none" }}
          >
            👨‍🏫 Faculty
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/add-faculty"
            style={{ color: "white", textDecoration: "none" }}
          >
            ➕ Add Faculty
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/timetable"
            style={{ color: "white", textDecoration: "none" }}
          >
            📅 Timetable
          </Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link
            to="/add-timetable"
            style={{ color: "white", textDecoration: "none" }}
          >
            ➕ Add Timetable
          </Link>
        </li>

      </ul>

      <button
        onClick={logout}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          border: "none",
          background: "#ef4444",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Logout
      </button>

    </div>

  );
}

export default Sidebar;