import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await this.productService.addProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error creating product', error });
    }
  };

  public updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = req.params.id;
      const updatedProduct = await this.productService.modifyProduct(productId, req.body);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error updating product', error });
    }
  };

  public deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = req.params.id;
      await this.productService.removeProduct(productId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error });
    }
  };

  public getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.productService.fetchProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  };
}