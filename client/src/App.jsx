import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";

import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

import Faculty from "./pages/Faculty";
import AddFaculty from "./pages/AddFaculty";

import Subjects from "./pages/Subjects";
import AddSubject from "./pages/AddSubject";

import Timetable from "./pages/Timetable";
import AddTimetable from "./pages/AddTimetable";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<AdminDashboard />} />

      {/* Students */}
      <Route path="/students" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />

      {/* Faculty */}
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/add-faculty" element={<AddFaculty />} />

      {/* Subjects */}
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/add-subject" element={<AddSubject />} />

      {/* Timetable */}
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/add-timetable" element={<AddTimetable />} />

    </Routes>
  );
}

export default App;