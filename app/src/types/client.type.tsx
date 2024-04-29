export default interface IClientData {
  id?: number | null;
  firstName: string;
  lastName: string;
  dob: Date;
  primaryLanguage: string;
  secondaryLanguage?: string;
  primaryFundingSourceId: number;
}
