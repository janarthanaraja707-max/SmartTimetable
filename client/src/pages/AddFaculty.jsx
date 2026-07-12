import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddFaculty() {
  const [faculty, setFaculty] = useState({
    faculty_id: "",
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) => {
    setFaculty({
      ...faculty,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/faculty",
        faculty
      );

      alert(res.data.message);

      setFaculty({
        faculty_id: "",
        name: "",
        email: "",
        department: "",
        designation: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add faculty");
    }
  };

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
        }}
      >
        <h1>➕ Add Faculty</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="faculty_id"
            placeholder="Faculty ID"
            value={faculty.faculty_id}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Faculty Name"
            value={faculty.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={faculty.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={faculty.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={faculty.designation}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add Faculty
          </button>
        </form>
      </div>
    </>
  );
}

export default AddFaculty;