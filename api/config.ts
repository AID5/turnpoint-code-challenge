import mysql from "mysql2";

const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "turnpoint_db",
};

// Create a MySQL pool
const pool = mysql.createPool(config).promise();

// Export the pool
export default pool;
