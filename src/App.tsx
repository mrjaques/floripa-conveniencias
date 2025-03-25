// //Código inicial e funcional, em uso de avisos ao sair do carrinho

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { TooltipProvider } from "./components/ui/tooltip";
// import { Toaster } from "./components/ui/toaster";
// import { Sonner } from "./components/ui/sonner";
// import Index from "./pages/Index"; // Página principal
// import NotFound from "./pages/NotFound"; // Página 404
// import Sobre from "./pages/sobre"; // Nova página "Sobre"
// import Contato from "./pages/contato"; // Nova página "Contato"
// import Termos from "./pages/termos"; // Nova página "Termos"
// import Footer from "./components/Footer"; // Importando o rodapé

// export const queryClient = new QueryClient();

// // Simulação do estado do carrinho (ajuste conforme sua lógica real)
// const getCartItems = () => {
//   const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//   return cart.length > 0;
// };


// const App = () => (
  
//   <div className="flex flex-col min-h-screen">
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/sobre" element={<Sobre />} />
//             <Route path="/contato" element={<Contato />} />
//             <Route path="/termos" element={<Termos />} />

//             {/* MANTENHA O CATCH-ALL NO FINAL */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//           <Footer /> {/* Adicionando o rodapé para estar sempre visível */}
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   </div>
//   );
  

// export default App;

//Código gerado pelo Copilot para incluir a pagina de administração

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Sonner } from "./components/ui/sonner";
import Index from "./pages/Index"; // Página principal
import NotFound from "./pages/NotFound"; // Página 404
import Sobre from "./pages/sobre"; // Nova página "Sobre"
import Contato from "./pages/contato"; // Nova página "Contato"
import Termos from "./pages/termos"; // Nova página "Termos"
import Admin from "./pages/Admin"; // Nova página "Admin"
import Footer from "./components/Footer"; // Importando o rodapé

export const queryClient = new QueryClient();

// Simulação do estado do carrinho (ajuste conforme sua lógica real)
const getCartItems = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return cart.length > 0;
};

const App = () => (
  <div className="flex flex-col min-h-screen">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/admin" element={<Admin />} /> {/* Nova rota para a página de administração */}

              {/* MANTENHA O CATCH-ALL NO FINAL */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer /> {/* Adicionando o rodapé para estar sempre visível */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;




//O código abaixo funciona, mas não gera aviso ao tentar sair da página com itens no carrinho


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { Toaster } from "react-hot-toast";
// import { Toaster as SonnerToaster } from "sonner";
// import { TooltipProvider } from "./components/ui/tooltip";
// import Footer from "./components/Footer";
// import Index from "./pages/Index";
// import Sobre from "./pages/sobre";
// import Contato from "./pages/contato";
// import Termos from "./pages/termos";
// import NotFound from "./pages/NotFound";
// import useWarnOnExit from "./hooks/useWarnOnExit";

// export const queryClient = new QueryClient();

// // Simulação do estado do carrinho (ajuste conforme sua lógica real)
// const getCartItems = () => {
//   const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//   return cart.length > 0;
// };

// const App = () => {
//   const hasItemsInCart = getCartItems(); // Verifica se há itens no carrinho
//   useWarnOnExit(hasItemsInCart); // Aplica o aviso de saída

//   return (
//     <div className="flex flex-col min-h-screen">
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <SonnerToaster />
//           <BrowserRouter>
//             <main className="flex-grow">
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/sobre" element={<Sobre />} />
//                 <Route path="/contato" element={<Contato />} />
//                 <Route path="/termos" element={<Termos />} />

//                 {/* MANTENHA O CATCH-ALL NO FINAL */}
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//             <Footer />
//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </div>
//   );
// };

// export default App;
