# Product Management Backend

Este projeto é uma aplicação de gerenciamento de produtos construída com Node.js e TypeScript. Ele fornece uma API para criar, atualizar, deletar e listar produtos.

## Estrutura do Projeto

```
product-management-backend
├── src
│   ├── controllers
│   │   └── productController.ts  # Controlador para gerenciar produtos
│   ├── models
│   │   └── productModel.ts        # Modelo de dados para produtos
│   ├── routes
│   │   └── productRoutes.ts       # Rotas da API para produtos
│   ├── services
│   │   └── productService.ts      # Lógica de negócios para produtos
│   └── app.ts                     # Ponto de entrada da aplicação
├── package.json                   # Configuração do npm
├── tsconfig.json                  # Configuração do TypeScript
└── README.md                      # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd product-management-backend
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```
   npm start
   ```
2. A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /products` - Criar um novo produto
- `GET /products` - Listar todos os produtos
- `PUT /products/:id` - Atualizar um produto existente
- `DELETE /products/:id` - Deletar um produto

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.