const Contato = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Entre em Contato</h1>
      <p className="mt-4 text-gray-700 text-center">Tem alguma dúvida? Preencha o formulário abaixo e entraremos em contato.</p>

      <form className="mt-6 space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700">Nome</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Seu nome" />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="seu@email.com" />
        </div>

        <div>
          <label className="block text-gray-700">Mensagem</label>
          <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Digite sua mensagem"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Enviar Mensagem
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">Ou entre em contato pelo email: <strong>suporte@delivery.com</strong></p>
      </div>
    </div>
  );
};

export default Contato;
