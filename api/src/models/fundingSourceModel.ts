import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql");

const FundingSource = sequelize.define("Client", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
});

export default FundingSource;
