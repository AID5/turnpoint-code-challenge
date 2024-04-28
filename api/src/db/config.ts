import { Dialect, Sequelize } from "sequelize";

const dbName = (process.env.DB_NAME as string) || "turnpoint_db";
const dbUser = (process.env.DB_USER as string) || "root";
const dbHost = process.env.DB_HOST || "localhost";
const dbDriver = (process.env.DB_DRIVER as Dialect) || "mysql";
const dbPassword = process.env.DB_PASSWORD || "root";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

export default sequelizeConnection;
