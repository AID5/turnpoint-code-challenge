import FundingSource from "../models/fundingSource";

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  primaryLanguage: string;
  secondaryLanguage: string;
  primaryFundingSourceId: number;
}
