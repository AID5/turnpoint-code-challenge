import * as fundingSourceDal from "../db/dal/fundingSource";
import {
  FundingSourceInput,
  FundingSourceOutput,
} from "../models/fundingSource";

export const create = (
  payload: FundingSourceInput
): Promise<FundingSourceOutput> => {
  return fundingSourceDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<FundingSourceInput>
): Promise<FundingSourceOutput> => {
  return fundingSourceDal.update(id, payload);
};
export const getById = (id: number): Promise<FundingSourceOutput> => {
  return fundingSourceDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return fundingSourceDal.deleteById(id);
};
export const getAll = (): Promise<FundingSourceOutput[]> => {
  return fundingSourceDal.getAll();
};
