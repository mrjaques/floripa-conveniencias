import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-700 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold">Floripa Conveniências</h2>
          <p className="mt-2 text-white-400">Rápido, seguro e bem gelado!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Links Úteis</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/sobre" className="text-white-400 hover:text-gray-300">Sobre Nós</a></li>
            <li><a href="/contato" className="text-white-400 hover:text-gray-300">Contato</a></li>
            <li><a href="/termos" className="text-white-400 hover:text-gray-300">Termos e Condições</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Siga-nos</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-white-400 hover:text-gray-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/teyy_jaques" className="text-white-400 hover:text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-white-500 text-sm">
        &copy; {new Date().getFullYear()} Floripa Conveniências. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
