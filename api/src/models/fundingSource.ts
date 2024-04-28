import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db/config";

interface FundingSourceAttributes {
  id: number;
  name: string;
}

export interface FundingSourceInput
  extends Optional<FundingSourceAttributes, "id"> {}
export interface FundingSourceOutput
  extends Required<FundingSourceAttributes> {}

class FundingSource
  extends Model<FundingSourceAttributes, FundingSourceInput>
  implements FundingSourceAttributes
{
  public id!: number;
  public name!: string;
}

FundingSource.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  }
);

export default FundingSource;
