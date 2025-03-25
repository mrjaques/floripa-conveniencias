
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const Cart = ({ items, onRemoveItem, onUpdateQuantity }: CartProps) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState(items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // O CÓDGIO ABAIXO É FUNCIONAL, MAS SEM A FORMA DE PAGAMENTO NO WPP

  // const handleWhatsAppCheckout = () => {
  //   if (!name || !address) {
  //     alert("Por favor, preencha seu nome e endereço.");
  //     return;
  //   }

  //   const message = `*Novo Pedido*\n\n*Nome:* ${name}\n*Endereço:* ${address}\n\n*Produtos:*\n${items
  //     .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`)
  //     .join("\n")}\n\n*Total:* R$ ${total.toFixed(2)}`;

  //   const whatsappUrl = `https://wa.me/5551996277338?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl, "_blank");
  //   setIsOpen(false);
  // };

  // O CÓDGIO ACIMA É FUNCIONAL, MAS SEM A FORMA DE PAGAMENTO NO WPP

  // O CÓDIGO ABAIXO É O CÓDIGO COM A FORMA DE PAGAMENTO NO WPP, POREM SEM LIMPAR O CARRINHO
  // const handleWhatsAppCheckout = () => {
  //   if (!name || !address || !paymentMethod) {
  //     alert("Por favor, preencha seu nome, endereço e forma de pagamento.");
  //     return;
  //   }
  
  //   const message = `*Novo Pedido*\n\n` +
  //     `*Nome:* ${name}\n` +
  //     `*Endereço:* ${address}\n` +
  //     `*Forma de Pagamento:* ${paymentMethod}\n\n` + // Adicionado a forma de pagamento
  //     `*Produtos:*\n${items
  //       .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`)
  //       .join("\n")}\n\n` +
  //     `*Total:* R$ ${total.toFixed(2)}`;
  
  //   const whatsappUrl = `https://wa.me/5551996277338?text=${encodeURIComponent(message)}`;
  //   window.open(whatsappUrl, "_blank");
  //   setIsOpen(false);
  // };

  //CÓDIGO ABAIXO FUNCIONA, MAS NÃO LIMPA CARRINHO.

  // const handleWhatsAppCheckout = () => {
  //   if (!name || !address || !paymentMethod) {
  //     alert("Por favor, preencha seu nome, endereço e forma de pagamento.");
  //     return;
  //   }
  
  //   const message = `*Novo Pedido*\n\n` +
  //     `*Nome:* ${name}\n` +
  //     `*Endereço:* ${address}\n` +
  //     `*Forma de Pagamento:* ${paymentMethod}\n\n` +
  //     `*Produtos:*\n${items
  //       .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`)
  //       .join("\n")}\n\n` +
  //     `*Total:* R$ ${total.toFixed(2)}`;
  
  //   const whatsappUrl = `https://wa.me/5551996277338?text=${encodeURIComponent(message)}`;
  
  //   // 🔹 Primeiro limpa o carrinho local e do localStorage
  //   setCartItems([]); 
  //   localStorage.removeItem("cart"); 
  
  //   // 🔹 Pequeno atraso antes de abrir o WhatsApp para garantir que o estado atualize
  //   setTimeout(() => {
  //     window.open(whatsappUrl, "_blank");
  //   }, 500); 
  
  //   setIsOpen(false);
  // };

  //CÓDIGO ABAIXO FUNCIONA, MAS NÃO LIMPA CARRINHO.
  
  
  const handleWhatsAppCheckout = () => {
  if (!name || !address || !paymentMethod) {
    alert("Por favor, preencha seu nome, endereço e forma de pagamento.");
    return;
  }

  const message = `*Novo Pedido*\n\n` +
    `*Nome:* ${name}\n` +
    `*Endereço:* ${address}\n` +
    `*Forma de Pagamento:* ${paymentMethod}\n\n` +
    `*Produtos:*\n${items
      .map((item) => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")}\n\n` +
    `*Total:* R$ ${total.toFixed(2)}`;

  const whatsappUrl = `https://wa.me/5551996277338?text=${encodeURIComponent(message)}`;

  // 🔹 Limpando o estado do carrinho
  setCartItems([]);

  // 🔹 Removendo o carrinho do localStorage
  localStorage.removeItem("cart");

  // 🔹 Forçando um reload na página para garantir que o estado seja atualizado corretamente
  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
    window.location.reload(); // 🔥 Garante que o carrinho seja limpo na interface
  }, 500);

  setIsOpen(false);
};


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart style={{ height: '40px', width: '40px' }}  />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-dark text-white text-xs rounded-full h-7 w-7 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remover
                </Button>
              </div>
            </div>
          ))}
          {items.length > 0 ? (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Seu endereço completo"
                />
              </div>
             
              <div className="space-y-2">
                <Label htmlFor="payment">Forma de Pagamento</Label>
                <select
                  id="payment"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border rounded-md p-2 w-full"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="cartao_credito">Cartão de Crédito</option>
                  <option value="cartao_debito">Cartão de Débito</option>
                  <option value="pix">Pix</option>
                  <option value="dinheiro">Dinheiro</option>
                </select>
              </div>

              <div className="pt-4">
                <p className="text-lg font-semibold mb-4">
                  Total: R$ {total.toFixed(2)}
                </p>
                <Button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-black hover:bg-gold-dark transition-colors duration-300"
                >
                  Finalizar Pedido via WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Seu carrinho está vazio</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
