import pool from "../../config";

async function getClients() {
  const sqlQuery = "SELECT * FROM Clients";
  const [rows] = await pool.query(sqlQuery);
  return rows;
}

async function getClient(id: string) {
  const sqlQuery = "SELECT * FROM Clients WHERE Id = ?";
  const [rows] = await pool.query(sqlQuery, id);
  return rows;
}

async function createClient(
  firstName: string,
  lastName: string,
  DOB: string,
  primaryLanguage: string,
  secondaryLanguage: string,
  primaryFundingSourceId: string
) {
  const sqlQuery = `INSERT INTO Clients(FirstName, LastName, DOB, PrimaryLanguage, SecondaryLanguage, PrimaryFundingSourceId)
                    VALUES 	(?, ?, DATE(?), ?, ?, ?)`;
  const [result] = await pool.query(sqlQuery, [
    firstName,
    lastName,
    DOB,
    primaryLanguage,
    secondaryLanguage,
    primaryFundingSourceId,
  ]);
  return result;
}

async function updateClient(
  id: string,
  firstName: string,
  lastName: string,
  DOB: string,
  primaryLanguage: string,
  secondaryLanguage: string,
  primaryFundingSourceId: string
) {
  const sqlQuery = `UPDATE Clients SET FirstName = ?, LastName = ?, DOB = ?, PrimaryLanguage = ?, SecondaryLanguage = ?, PrimaryFundingSourceId = ?
                    WHERE Id = ?`;
  const [result] = await pool.query(sqlQuery, [
    firstName,
    lastName,
    DOB,
    primaryLanguage,
    secondaryLanguage,
    primaryFundingSourceId,
    id,
  ]);
  return result;
}

export default {
  getClients,
  getClient,
  createClient,
  updateClient,
};
