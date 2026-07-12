import { useState } from "react";

function AddTimetable() {
  const [formData, setFormData] = useState({
    department: "",
    semester: "",
    day: "",
    period: "",
    subject: "",
    faculty: "",
    classroom: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Timetable Added Successfully!");

    console.log(formData);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Add Timetable</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="semester"
          placeholder="Semester"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="day"
          placeholder="Day"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="period"
          placeholder="Period"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="faculty"
          placeholder="Faculty Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="classroom"
          placeholder="Classroom"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          Save Timetable
        </button>

      </form>
    </div>
  );
}

export default AddTimetable;