import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "/products";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });
      console.log("state::::::: getTargetProducts ::::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR:getTargetProducts: ${err.message}`);
      throw err;
    }
  }

  async getChosenDish(dish_id:string) {
    try {
      const url = `/products/${dish_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      console.log("state:: ::::: getChosenDish :::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR: getChosenDish: ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
