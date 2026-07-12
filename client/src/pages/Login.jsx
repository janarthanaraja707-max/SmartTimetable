import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        user
      );

      alert(response.data.message);

      if (response.data.success) {
        // Save logged-in user
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        // Redirect based on role
        if (response.data.user.role === "admin") {
          navigate("/dashboard");
        } else if (response.data.user.role === "faculty") {
          navigate("/faculty");
        } else {
          navigate("/students");
        }
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Cannot connect to backend server");
      }
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "80px auto",
        textAlign: "center",
      }}
    >
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>

      </form>

      <br />

      <Link to="/register">
        Don't have an account? Register
      </Link>
    </div>
  );
}

export default Login;