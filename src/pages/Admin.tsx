import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      console.log("Produtos recebidos:", response.data);
      setProducts(response.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      setError("Erro ao buscar produtos");
    }
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("/api/products", newProduct);
      fetchProducts();
    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
      setError("Erro ao adicionar produto");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
      setError("Erro ao excluir produto");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administração de Produtos</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Adicionar Novo Produto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Preço"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Categoria"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Imagem"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Adicionar Produto
        </button>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Lista de Produtos</h2>
        <ul>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b p-2"
              >
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Excluir
                </button>
              </li>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
