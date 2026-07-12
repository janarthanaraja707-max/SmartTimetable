import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        user
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Cannot connect to server");
      }

    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "60px auto",
      }}
    >
      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={user.fullname}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

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
            marginBottom: "10px",
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
            marginBottom: "10px",
          }}
        />

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>

      </form>

      <br />

      <Link to="/login">
        Already have an account? Login
      </Link>

    </div>
  );
}

export default Register;