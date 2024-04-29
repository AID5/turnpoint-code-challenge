import http from "../common/http";
import IClientData from "../types/client.type";

class ClientService {
  getAll() {
    return http.get<Array<IClientData>>("/client");
  }

  get(id: number) {
    return http.get<IClientData>(`/client/${id}`);
  }

  create(data: IClientData) {
    return http.post<IClientData>("/client", data);
  }

  update(data: IClientData, id: number) {
    return http.put<any>(`/client/${id}`, data);
  }

  delete(id: number) {
    return http.delete<any>(`/client/${id}`);
  }
}

export default new ClientService();
