import FundingSource from "../../models/fundingSource";
import {
  FundingSourceInput,
  FundingSourceOutput,
} from "../../models/fundingSource";

export const getAll = async (): Promise<FundingSourceOutput[]> => {
  return FundingSource.findAll({});
};

export const getById = async (id: number): Promise<FundingSourceOutput> => {
  const data = await FundingSource.findByPk(id);
  if (!data) {
    throw new Error("not found");
  }
  return data;
};

export const getNameById = async (id: number): Promise<string> => {
  const data = await FundingSource.findByPk(id);
  if (!data) {
    throw new Error("not found");
  }
  return data.name;
};

export const create = async (
  payload: FundingSourceInput
): Promise<FundingSourceOutput> => {
  const data = await FundingSource.create(payload);
  return data;
};

export const update = async (
  id: number,
  payload: Partial<FundingSourceInput>
): Promise<FundingSourceOutput> => {
  const response = await FundingSource.findByPk(id);
  if (!response) {
    throw new Error("not found");
  }
  const data = await (response as FundingSource).update(payload);
  return data;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCount = await FundingSource.destroy({
    where: { id },
  });
  return !!deletedCount;
};
