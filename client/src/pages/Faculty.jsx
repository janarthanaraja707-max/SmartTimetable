import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    loadFaculty();
  }, []);

  const loadFaculty = async () => {
    try {
      const res = await axios.get("http://localhost:5000/faculty");
      setFaculty(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load faculty");
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
        <h1>👨‍🏫 Faculty Details</h1>

        <table
          border="1"
          cellPadding="10"
          width="100%"
          style={{ borderCollapse: "collapse", background: "white" }}
        >
          <thead style={{ background: "#10b981", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Faculty ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Designation</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.faculty_id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Faculty;