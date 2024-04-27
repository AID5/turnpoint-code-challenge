import express from "express";
import mysql from "mysql2";

const app = express();

const PORT = 3000;

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "turnpoint_db",
  insecureAuth: true,
});

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The API is running on: http://localhost:${PORT}.`)
);

app.get("/clients", (req, res) => {
  const sqlQuery = "SELECT * FROM Clients";

  database.query(sqlQuery, (err, result) => {
    if (err) throw err;

    res.json({ result });
  });
});

app.get("/fundingSources", (req, res) => {
  const sqlQuery = "SELECT * FROM FundingSources";

  database.query(sqlQuery, (err, result) => {
    if (err) throw err;

    res.json({ result });
  });
});
