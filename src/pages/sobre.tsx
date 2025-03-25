const Sobre = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Sobre Nós</h1>
      <p className="mt-4 text-gray-700 text-center">
        Bem-vindo ao nosso serviço de delivery! Nosso objetivo é oferecer comida de qualidade, com rapidez e segurança.
      </p>

      <div className="mt-8 space-y-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Nossa Missão</h2>
          <p className="text-gray-600">
            Garantir que nossos clientes tenham acesso à melhor comida, com entrega rápida e atendimento excepcional.
          </p>
        </div>
        
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Nossos Valores</h2>
          <p className="text-gray-600">
            Prezamos pela qualidade, segurança alimentar e excelência no atendimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

  