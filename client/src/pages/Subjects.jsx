import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Subjects() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/subjects");
      setSubjects(res.data);
    } catch (err) {
      console.log(err);
      alert("Cannot load subjects");
    }
  };

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
          background: "#f4f6f9",
          minHeight: "100vh",
        }}
      >
        <h1>📚 Subjects</h1>

        <table
          border="1"
          cellPadding="10"
          width="100%"
          style={{
            background: "white",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ background: "#2563eb", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Credits</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.subject_code}</td>
                <td>{subject.subject_name}</td>
                <td>{subject.department}</td>
                <td>{subject.semester}</td>
                <td>{subject.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Subjects;