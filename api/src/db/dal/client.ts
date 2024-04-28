import Client from "../../models/client";
import { ClientInput, ClientOutput } from "../../models/client";

export const getAll = async (): Promise<ClientOutput[]> => {
  return Client.findAll({});
};

export const getById = async (id: number): Promise<ClientOutput> => {
  const data = await Client.findByPk(id);
  if (!data) {
    throw new Error("not found");
  }
  return data;
};

export const create = async (payload: ClientInput): Promise<ClientOutput> => {
  const data = await Client.create(payload);
  return data;
};

export const update = async (
  id: number,
  payload: Partial<ClientInput>
): Promise<ClientOutput> => {
  const response = await Client.findByPk(id);
  if (!response) {
    throw new Error("not found");
  }
  const updatedData = await (response as Client).update(payload);
  return updatedData;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCount = await Client.destroy({
    where: { id },
  });
  return !!deletedCount;
};
