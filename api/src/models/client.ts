import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db/config";
import FundingSource from "./fundingSource";

interface ClientAttributes {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  primaryLanguage: string;
  secondaryLanguage?: string;
  primaryFundingSourceId: number;
}

export interface ClientInput
  extends Optional<ClientAttributes, "id" | "secondaryLanguage"> {}
export interface ClientOutput extends Required<ClientAttributes> {}

class Client
  extends Model<ClientAttributes, ClientInput>
  implements ClientOutput
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public dob!: Date;
  public primaryLanguage!: string;
  public secondaryLanguage!: string;
  public primaryFundingSourceId!: number;
  public primaryFundingSource!: FundingSource;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    primaryLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondaryLanguage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primaryFundingSourceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  }
);

export default Client;
