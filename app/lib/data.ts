import ky from "ky";
import { Product, ProductsResponse } from "@/app/lib/definitions";

export async function getProducts(category?: string) {
  try {
    const data = await ky
      .get(
        category
          ? `https://dummyjson.com/products/category/${category}`
          : "https://dummyjson.com/products"
      )
      .json<ProductsResponse>();
    return data;
  } catch (error) {
    console.error("getProducts error:", error);
    throw new Error("Failed to fetch products listing.");
  }
}

export async function getProduct(id: string) {
  try {
    const data = await ky
      .get(`https://dummyjson.com/products/${id}`)
      .json<Product>();
    return data;
  } catch (error) {
    console.error("getProduct error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function getCategories() {
  try {
    const data = await ky
      .get("https://dummyjson.com/products/categories")
      .json<string[]>();
    return data;
  } catch (error) {
    console.error("getProducts error:", error);
    throw new Error("Failed to fetch product categories.");
  }
}
