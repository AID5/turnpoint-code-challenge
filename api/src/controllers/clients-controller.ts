import pool from "../../config";

async function getClients() {
  const sqlQuery = "SELECT * FROM Clients";
  const [rows] = await pool.query(sqlQuery);
  return rows;
}

export default {
  getClients,
};
