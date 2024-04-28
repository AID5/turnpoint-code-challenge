import { Sequelize, DataTypes } from "sequelize";
import FundingSource from "./fundingSourceModel";

const sequelize = new Sequelize("mysql");

const Client = sequelize.define("Client", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  dob: DataTypes.DATE,
  primaryLanguage: DataTypes.STRING,
  secondaryLanguage: DataTypes.STRING,
});

Client.hasOne(FundingSource);
FundingSource.belongsTo(Client, {
  foreignKey: "primaryFundingSourceId",
});
