import { Product } from "../models/productModel";

export class ProductService {
  private products: Product[] = [];

  public addProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  public modifyProduct(id: number, updatedProduct: Partial<Product>): Product | null {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return null;
    }
    const existingProduct = this.products[productIndex];
    const modifiedProduct = { ...existingProduct, ...updatedProduct };
    this.products[productIndex] = modifiedProduct;
    return modifiedProduct;
  }

  public removeProduct(id: number): boolean {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return false;
    }
    this.products.splice(productIndex, 1);
    return true;
  }

  public fetchProducts(): Product[] {
    return this.products;
  }
}