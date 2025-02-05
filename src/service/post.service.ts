
import { apiClient } from "../config/api.config";
import { API_BAСE_URL } from "../config/env.config";
import { ProductResponse } from "../interface/ProductResponse";



console.log(API_BAСE_URL,"link");


export async function getHomePost(param:any): Promise<ProductResponse> {
  const products = await apiClient.get(API_BAСE_URL + "/products", {
    params: param,
  });
  console.log(products.data,'asdasdasd');
  
  return products.data;
}
