import http from "../common/http";
import IFundingSourceData from "../types/fundingSource.type";

class FundingSourceService {
  getAll() {
    return http.get<Array<IFundingSourceData>>("/fundingSource");
  }

  get(id: number) {
    return http.get<IFundingSourceData>(`/fundingSource/${id}`);
  }

  getNameById(id: number) {
    return http.get<string>(`/fundingSource/name/${id}`);
  }

  create(data: IFundingSourceData) {
    return http.post<IFundingSourceData>("/fundingSource", data);
  }

  update(data: IFundingSourceData, id: number) {
    return http.put<any>(`/fundingSource/${id}`, data);
  }

  delete(id: number) {
    return http.delete<any>(`/fundingSource/${id}`);
  }
}

export default new FundingSourceService();
