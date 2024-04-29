import * as service from "../services/fundingSourceService";
import { FundingSource } from "../interfaces";
import {
  FundingSourceInput,
  FundingSourceOutput,
} from "../models/fundingSource";

export const create = async (
  payload: FundingSourceInput
): Promise<FundingSource> => {
  return toObject(await service.create(payload));
};

export const update = async (
  id: number,
  payload: FundingSourceInput
): Promise<FundingSource> => {
  return toObject(await service.update(id, payload));
};

export const getById = async (id: number): Promise<FundingSource> => {
  return toObject(await service.getById(id));
};

export const getNameById = async (id: number): Promise<string> => {
  return await service.getNameById(id);
};

export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);

  return isDeleted;
};

export const getAll = async (): Promise<FundingSource[]> => {
  return (await service.getAll()).map(toObject);
};

const toObject = (FundingSource: FundingSourceOutput): FundingSource => {
  return {
    id: FundingSource.id,
    name: FundingSource.name,
  };
};
