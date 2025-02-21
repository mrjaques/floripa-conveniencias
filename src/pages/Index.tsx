
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  // Cervejas
  {
    id: "beer-1",
    name: "Cerveja Brahma Duplo Malte",
    price: 6.99,
    image: "/images/brahma.jpg",
    category: "Cervejas",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "beer-2",
    name: "Cerveja Heineken Long Neck",
    price: 8.90,
    image: "/images/heiniken.jpg",
    category: "Cervejas",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "beer-3",
    name: "Cerveja Polar Latão",
    price: 8.90,
    image: "/images/polar.jpg",
    category: "Cervejas",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "beer-4",
    name: "Cerveja Amstel Latão",
    price: 8.90,
    image: "/images/amstel.jpg",
    category: "Cervejas",
    description: "Produto para maiores de 18 anos",
  },
  // Vodka
  {
    id: "vodka-1",
    name: "Vodka Smirnoff",
    price: 49.90,
    image: "/images/smirnof.jpg",
    category: "Vodka",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vodka-2",
    name: "Vodka Absolut",
    price: 49.90,
    image: "/images/absolut.jpg",
    category: "Vodka",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vodka-3",
    name: "Vodka ciroc",
    price: 49.90,
    image: "/images/ciroc.png",
    category: "Vodka",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vodka-4",
    name: "Vodka Orloff",
    price: 49.90,
    image: "/images/orlof.jpg",
    category: "Vodka",
    description: "Produto para maiores de 18 anos",
  },
  // Gin
  {
    id: "gin-1",
    name: "Gin Bombay",
    price: 129.90,
    image: "/images/bombay.jpg",
    category: "Gin",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "gin-2",
    name: "Gin Beefeter",
    price: 129.90,
    image: "/images/beefeter.jpg",
    category: "Gin",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "gin-3",
    name: "Gin Rocks",
    price: 129.90,
    image: "/images/rocks.png",
    category: "Gin",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "gin-4",
    name: "Gin Tanqueray",
    price: 129.90,
    image: "/images/tanqueray.jpg",
    category: "Gin",
    description: "Produto para maiores de 18 anos",
  },
  // Vinho
  {
    id: "vinhos-1",
    name: "Vinho CASILLERO DEL DIABLO",
    price: 89.90,
    image: "/images/casilero.jpg",
    category: "Vinho",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vinhos-2",
    name: "Vinho Marcus James",
    price: 89.90,
    image: "/images/marcusjames.jpg",
    category: "Vinho",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vinhos-3",
    name: "Vinho Quinta Moraes",
    price: 89.90,
    image: "/images/quintamoraes.jpg",
    category: "Vinho",
    description: "Produto para maiores de 18 anos",
  },
  {
    id: "vinhos-4",
    name: "Vinho San Severo",
    price: 89.90,
    image: "/images/sansevero.png",
    category: "Vinho",
    description: "Produto para maiores de 18 anos",
  },
  // Variedades
  {
    id: "variedades-1",
    name: "Chocolate Lacta",
    price: 9.90,
    image: "/images/lacta.jpg",
    category: "Variedades",
  },
  {
    id: "variedades-2",
    name: "Chocolate Nestlé",
    price: 9.90,
    image: "/images/nestle.jpg",
    category: "Variedades",
  },
  {
    id: "variedades-3",
    name: "Chocolate Newgbauer",
    price: 9.90,
    image: "/images/negobauer.jpg",
    category: "Variedades",
  },
  {
    id: "variedades-4",
    name: "Pipoca Yoki",
    price: 9.90,
    image: "/images/pipoca.jpg",
    category: "Variedades",
  },
];

const categories = ["Cervejas", "Vodka", "Gin", "Vinho", "Variedades"];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Cervejas");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && (searchQuery ? true : matchesCategory);
  });

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="w-full h-auto bg-emerald-500 relative overflow-hidden">
        <img
          src="/images/banner.jpg"
          alt="Banner promocional"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header com Logo e Carrinho */}
      <header className="bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Floripa Conveniencias</h1>
                <p className="text-sm text-gray-500">Bebidas Premium</p>
              </div>
            </div>
            <Cart
              items={cartItems}
              onRemoveItem={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Categorias */}
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Título da categoria */}
        <h2 className="text-2xl font-bold mb-6">
          {searchQuery ? `Resultados para "${searchQuery}"` : selectedCategory}
        </h2>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Mensagem quando não houver resultados */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum produto encontrado para esta busca.
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
