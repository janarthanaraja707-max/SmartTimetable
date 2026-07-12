import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [student, setStudent] = useState({
    reg_no: "",
    name: "",
    email: "",
    department: "",
    semester: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/students",
        student
      );

      alert(res.data.message);

      setStudent({
        reg_no: "",
        name: "",
        email: "",
        department: "",
        semester: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add student");
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Add Student</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="reg_no"
          placeholder="Register Number"
          value={student.reg_no}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={student.semester}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;