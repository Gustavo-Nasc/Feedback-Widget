//Para trabalharmos com o HTTP da nossa página, utilizaremos o "framework" Express, ele permite, principalmente, a parte de rotas do site

//Como estamos utilizando o TypeScritp, quando importamos o Express, dá erro, pois precisamos de uma outra dependência do node para o TypeScript, o workflow é diferente (Dependência: npm i -D @types/express)
import express from 'express'
import { routes } from './routes';
import cors from 'cors';

//Criação da Aplicação
const app = express();

//Utilizaremos o CORS para termos um controle de segurança no back-end para que não seja permitido que front-end inadequados acessem informações do back-end
app.use(cors());
//Por padrão, o express não entende quando estamos enviando o body da nossa requisição em JSON, ou seja, precisamos falar para o express que iremos trabalhar com JSON
app.use(express.json());
app.use(routes);

//Com express é possível fazer um teste de rotas também, no caso, retornaremos um texto quando entrarmos no endereço '/test'
//O express passa para a função get dois argumentos, a Requisição (req) e a Resposta (res)
app.get('/test', (req, res) => {
    //Como não estamos trabalhando com requisição de nada, teremos apenas uma resposta
    return res.send('Hello World Test!');
});

/**
 * GET = Buscar informações
 * POST = Cadastrar informações
 * PUT = Atualizar informações (diversas informações)
 * PATCH = Atualizar uma informação única
 * DELETE = Deletar uma informação
*/

//Declaração da porta, na URL localhost:3333 (Porta 3333)
app.listen(3333, () => {
    //No caso, como resposta retornaremos apenas que o servidor está no ar
    console.log('HTTP Server Running');
});

// Utilizaremos um Banco de Dados Open Source chamado Postgres quando o projeto entrar em produção. Porém, como ainda está em desenvolvimento, utilizaremos o SQLite.

//Com o SQLite, não há necessidade de instalarmos novas ferramentas, pois o Banco de Dados fica salvo como um arquivo mesmo.

//Utilizaremos o Prisma, é um ORM, ou seja, uma ferramenta que facilita a trabalharmos com operações no banco de dados, ele muda a forma como nos comunicamos com o banco de dados, utilizando tipagem em JS, diferente do MYSQL tradicional. Além disso, se, futuramente, mudarmos para Postgres o banco da aplicação, não será necessário alterarmos nada, pois o Prisma dá suporte para esse e demais bancos