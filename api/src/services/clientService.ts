import * as clientDal from "../db/dal/client";
import { ClientInput, ClientOutput } from "../models/client";

export const create = (payload: ClientInput): Promise<ClientOutput> => {
  return clientDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<ClientInput>
): Promise<ClientOutput> => {
  return clientDal.update(id, payload);
};
export const getById = (id: number): Promise<ClientOutput> => {
  return clientDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return clientDal.deleteById(id);
};
export const getAll = (): Promise<ClientOutput[]> => {
  return clientDal.getAll();
};
