## 🖥️ Projeto

O projeto **"RocketMovies"** é uma API desenvolvida em Node.js utilizando o framework Express para gerenciar um sistema de notas de filmes e tags, além de um sistema de gerenciamento de usuários. O projeto permite que usuários criem e gerenciem suas notas sobre filmes, associando tags às notas para uma melhor organização e filtragem. Este projeto foi realizado para conclusão do desafio do Stage 08 da trilha Explorer da Rocketseat.

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js e Express:** Estrutura da API e gerenciamento das rotas.
- **Knex.js:** Query builder para interações com o banco de dados, usado para criar e gerenciar as queries SQL.
- **Migrations:** Controlam a estrutura do banco de dados, permitindo criar e alterar tabelas de forma controlada.
- **SQLite:** Banco de dados relacional utilizado para armazenar as informações de usuários, notas de filmes e tags.
- **SQLite3:** Biblioteca para integração com o SQLite no Node.js.
- **Bcrypt.js:** Biblioteca para hashing de senhas, usada para proteger as credenciais dos usuários.
- **Express-async-errors:** Middleware para facilitar o tratamento de erros assíncronos em rotas do Express.
- **PRAGMA foreign_keys:** Configuração do SQLite que assegura a integridade referencial entre tabelas.

## 📝 Como Testar
Para testar esse projeto, é necessário ter o NodeJS e o Insomnia instalados, clonar o repositório e rodar localmente com o NodeJS.

- Instale o NodeJS:
[NodeJS](https://nodejs.org/)

- Instale o Insomnia:
[Insomnia](https://insomnia.rest/download)

- Clone o projeto e acesse a pasta do mesmo:
```
$ git clone https://github.com/arauujo/api-rocketmovies.git
$ cd api-rocketmovies
```

- Inicie a API:
```
$ npm install
$ npm run dev
```
- Abra o Insomnia e crie as requisições HTTP de create, read, update, delete, conforme a estrutura dos arquivos de rotas, utilizando `localhost:3333` como URL base.