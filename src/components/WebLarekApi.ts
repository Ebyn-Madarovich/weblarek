import {
  IApi,
  IOrder,
  IGetProductsResponse,
  IPostOrderResponse,
} from "../types/index.ts";

export class WebLarekApi {
  api: IApi;
  constructor(api: IApi) {
    this.api = api;
  }

  getData(): Promise<IGetProductsResponse> {
    return this.api.get<IGetProductsResponse>("/product/");
  }
  postData(order: IOrder): Promise<IPostOrderResponse> {
    return this.api.post<IPostOrderResponse>("/order/", order, "POST");
  }
}
