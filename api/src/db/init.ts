import Client from "../models/client";
import FundingSource from "../models/fundingSource";

const dbInit = () => {
  Client.sync({ alter: false }), FundingSource.sync({ alter: false });
};
export default dbInit;
