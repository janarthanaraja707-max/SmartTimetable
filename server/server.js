console.log("THIS IS MY SERVER");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* =====================================
   HOME
===================================== */

app.get("/", (req, res) => {
  res.send("Smart Timetable Backend Running...");
});

/* =====================================
   DATABASE TEST
===================================== */

app.get("/test", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Connection Failed",
      });
    }

    res.json({
      success: true,
      message: "Database Connected Successfully",
    });
  });
});

/* =====================================
   REGISTER
===================================== */

app.post("/register", (req, res) => {
  const { fullname, email, password, role } = req.body;

  if (!fullname || !email || !password || !role) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const checkSql = "SELECT * FROM users WHERE email=?";

  db.query(checkSql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length > 0) {
      return res.json({
        success: false,
        message: "Email already exists",
      });
    }

    const sql =
      "INSERT INTO users(fullname,email,password,role) VALUES(?,?,?,?)";

    db.query(sql, [fullname, email, password, role], (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Registration Successful",
      });
    });
  });
});

/* =====================================
   LOGIN
===================================== */

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    res.json({
      success: true,
      message: "Login Successful",
      user: result[0],
    });
  });
});

/* =====================================
   STUDENTS
===================================== */

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
});

app.post("/students", (req, res) => {
  const {
    reg_no,
    name,
    email,
    department,
    semester,
  } = req.body;

  const sql =
    "INSERT INTO students(reg_no,name,email,department,semester) VALUES(?,?,?,?,?)";

  db.query(
    sql,
    [reg_no, name, email, department, semester],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "Student Added Successfully",
      });
    }
  );
});

/* =====================================
   FACULTY
===================================== */

app.get("/faculty", (req, res) => {
  db.query("SELECT * FROM faculty", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
});

app.post("/faculty", (req, res) => {
  const {
    faculty_id,
    name,
    email,
    department,
    designation,
  } = req.body;

  const sql =
    "INSERT INTO faculty(faculty_id,name,email,department,designation) VALUES(?,?,?,?,?)";

  db.query(
    sql,
    [
      faculty_id,
      name,
      email,
      department,
      designation,
    ],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "Faculty Added Successfully",
      });
    }
  );
});

/* =====================================
   TIMETABLE
===================================== */

app.get("/timetable", (req, res) => {
  db.query(
    "SELECT * FROM timetable ORDER BY department, semester, day_name, period_no",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
});

app.post("/timetable", (req, res) => {
  const {
    department,
    semester,
    day_name,
    period_no,
    subject_name,
    faculty_name,
  } = req.body;

  const sql = `
    INSERT INTO timetable
    (
      department,
      semester,
      day_name,
      period_no,
      subject_name,
      faculty_name
    )
    VALUES (?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      department,
      semester,
      day_name,
      period_no,
      subject_name,
      faculty_name,
    ],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        success: true,
        message: "Timetable Added Successfully",
      });
    }
  );
});

/* =====================================
   SERVER
===================================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🚀 Smart Timetable Server Started");
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("======================================");
});