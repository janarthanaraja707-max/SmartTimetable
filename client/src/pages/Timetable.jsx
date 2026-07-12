import Sidebar from "../components/Sidebar";

function Timetable() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
        }}
      >
        <h1>📅 Timetable</h1>
        <p>Timetable records will appear here.</p>
      </div>
    </>
  );
}

export default Timetable;