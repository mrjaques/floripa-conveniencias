
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  onAddToCart: (id: number) => void;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  onAddToCart,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(id);
    toast.success("Produto adicionado ao carrinho!");
  };



  return (
    <Card
      className="cursor-pointer relative overflow-hidden bg-white hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleAddToCart}

    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium line-clamp-2">{name}</p>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
          <p className="text-sm font-bold whitespace-nowrap">
            R$ {price.toFixed(2)}
          </p>
        </div>
      </div>
    </Card>
  );  
};
