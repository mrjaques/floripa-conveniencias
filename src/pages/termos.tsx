const Termos = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Termos e Condições</h1>
      <p className="mt-4 text-gray-700 text-center">
        Leia atentamente nossos termos e condições antes de usar nosso serviço.
      </p>

      <div className="mt-8 space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">1. Uso do Serviço</h2>
          <p className="text-gray-600">
            Ao utilizar nosso serviço, você concorda em seguir todas as regras e regulamentos estabelecidos por nós.
          </p>
          <a href="/termos.pdf" className="text-blue-500 hover:underline">Leia mais</a>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">2. Pagamentos</h2>
          <p className="text-gray-600">
            Os pagamentos devem ser feitos através dos métodos disponíveis na plataforma. Não nos responsabilizamos por transações fora do site.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">3. Política de Reembolso</h2>
          <p className="text-gray-600">
            Caso ocorra algum problema com sua entrega, entre em contato conosco para avaliarmos possíveis reembolsos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Termos;
