import { Router } from "express";
import { ProductService } from "../services/productService";

const router = Router();
const productService = new ProductService();

router.get("/products", (req, res) => {
  res.json(productService.fetchProducts());
});

router.post("/products", (req, res) => {
  const newProduct = req.body;
  res.json(productService.addProduct(newProduct));
});

router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const result = productService.modifyProduct(Number(id), updatedProduct);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Product not found");
  }
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = productService.removeProduct(Number(id));
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Product not found");
  }
});

export default router;
