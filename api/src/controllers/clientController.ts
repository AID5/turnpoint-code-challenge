import * as service from "../services/clientService";
import { Client } from "../interfaces";
import { ClientInput, ClientOutput } from "../models/client";

export const create = async (payload: ClientInput): Promise<Client> => {
  return toObject(await service.create(payload));
};

export const update = async (
  id: number,
  payload: ClientInput
): Promise<Client> => {
  return toObject(await service.update(id, payload));
};

export const getById = async (id: number): Promise<Client> => {
  return toObject(await service.getById(id));
};

export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);

  return isDeleted;
};

export const getAll = async (): Promise<Client[]> => {
  return (await service.getAll()).map(toObject);
};

const toObject = (Client: ClientOutput): Client => {
  return {
    id: Client.id,
    firstName: Client.firstName,
    lastName: Client.lastName,
    dob: Client.dob,
    primaryLanguage: Client.primaryLanguage,
    secondaryLanguage: Client.secondaryLanguage,
    primaryFundingSourceId: Client.primaryFundingSourceId,
  };
};
