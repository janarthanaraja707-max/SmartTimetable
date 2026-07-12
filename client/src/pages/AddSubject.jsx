import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddSubject() {
  const [subject, setSubject] = useState({
    subject_code: "",
    subject_name: "",
    department: "",
    semester: "",
    credits: "",
  });

  const handleChange = (e) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/subjects",
        subject
      );

      alert(res.data.message);

      setSubject({
        subject_code: "",
        subject_name: "",
        department: "",
        semester: "",
        credits: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add subject");
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
        <h1>➕ Add Subject</h1>

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
            name="subject_code"
            placeholder="Subject Code"
            value={subject.subject_code}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject_name"
            placeholder="Subject Name"
            value={subject.subject_name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={subject.department}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="semester"
            placeholder="Semester"
            value={subject.semester}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="credits"
            placeholder="Credits"
            value={subject.credits}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Add Subject
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSubject;