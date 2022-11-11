<hr>
<h1 align="center">flem-mail-api</h1>
<p align=center><i align="center">API que manipula as requisições e transferências de email das aplicações FLEM.</i></p>
<br>

<div align="center">

<a href="">![Known Vulnerabilities](https://snyk.io/test/github/frtechdev/flem-mail-api/badge.svg)</a>
<a href="">![Code Size](https://img.shields.io/github/languages/code-size/frtechdev/flem-mail-api)</a>
<a href="">![Repo Size](https://img.shields.io/github/repo-size/frtechdev/flem-mail-api)</a>
<a href="">[![Contributors](https://img.shields.io/github/contributors/frtechdev/flem-mail-api)](https://github.com/frtechdev/flem-mail-api/graphs/contributors)</a><br>
<a href="">![Last Commit](https://img.shields.io/github/last-commit/frtechdev/flem-mail-api)</a>
<a href="">[![Fork](https://img.shields.io/github/forks/frtechdev/flem-mail-api)](https://github.com/frtechdev/flem-mail-api/fork) </a>
<a href="">![Version](https://img.shields.io/badge/version-1.0.1-005bff) </a>
<a href="">[![license](https://img.shields.io/github/license/frtechdev/flem-mail-api)](https://github.com/frtechdev/flem-mail-api/LICENSE)</a>

<br>

</div>

<hr>
<br>

API que manipula as requisições e transferências de email das aplicações FLEM.

<br>

## Conteúdo

- [Objetivo](#section-obj)
- [Características](#section-carac)
- [Especificações](#section-specs)
- [Stack](#section-stack)
- [Documentação](#section-docs)
- [Como usar este repositório](#section-como-usar)
- [Notas de versão](#section-changelog)
- [Autores](#section-autores)
- [Contato](#section-contato)
- [Licença](#section-licenca)

<br>
<hr>

<a name="section-obj">

## Objetivo

</a>

- Fornecer uma API de alta performance e baixo custo computacional que consuma de maneira segura e estável os dados requisitados
- Manipular de maneira independente e com controle integrado dados provenientes dos servidores de arquivo FLEM.

<br>
<hr>

<a name="section-carac">

## Características

</a>

- Facilita os processos resumindo todas as suas funcionalidades centradas no consumo dos dados sem comprometer a performance.

<br>
<hr>

<a name="section-specs">

## Especificações

</a>

- **Tipo de Software:** Interface de Programação de Aplicações
- **Distribuição:** Web
- **Arquitetura:** MVC
- **Metodologia de Projeto:** Metodologia Ágil
- **Estrutura de Biblioteca:** Baseada em Framework
- **Protocolo de Banco de Dados:** ODBC
- **Dialeto de Banco de Dados:** SQL
- **Disponibilidade de Código:** Open Source

<br>
<hr>

<a name="section-stack">

## Stack

</a>

- **Linguagem Principal:** [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Framework Principal:** [Node.js](https://nodejs.org/en/docs/)
- **Framework estrutural:** [Next.js](https://nextjs.org/docs/getting-started)
- **Biblioteca de Conexão ODBC:** [Prisma.io](https://www.prisma.io)
- **Gerenciador de Bibliotecas:** [Yarn](https://yarnpkg.com/getting-started)
- **Bibliotecas:** Para uma lista completa de bibliotecas e dependências nos mais variados escopos, conferir o arquivo [package.json](https://github.com/frtechdev/flem-mail-api/blob/main/package.json).

<br>
<hr>

<a name="section-docs">

## Documentação

</a>

<a name="section-diagrama">

### Diagrama de Banco de Dados

</a>

[Diagrama em PDF](https://frtechdev.github.io/flem-mail-api/diagram/diagram-pdf.pdf)

[Diagrama em SQL](https://frtechdev.github.io/flem-mail-api/diagram/diagram-sql.sql)

Documentação adicional pode ser encontrada [aqui](https://frtechdev.github.io/flem-mail-api/).

<br>
<hr>

<a name="section-como-usar">

## Como usar este repositório

</a>

<a name="section-use-project">

### Como Projeto

</a>

1 - Faça um git clone ou o download do repositório, da forma que preferir

`git clone https://github.com/frtechdev/flem-mail-api.git`

2 - Instale um gerenciador de pacotes (preferencialmente yarn) utilizando um terminal no diretório raiz do repositório clonado

`yarn` ou `npm install`

3 - Execute a aplicação no terminal

`yarn dev` ou `npm run dev`

<a name="section-use-app">

### Como Aplicação

</a>

1 - Instale uma instância docker em uma máquina dedicada, conforme instruções na [Documentação do Docker](https://docs.docker.com/engine/install/).

2 - Faça um git clone ou o download do repositório, da forma que preferir

`git clone https://github.com/frtechdev/flem-mail-api.git`

3 - Execute o Dockerfile no diretório raiz do repositório clonado

`docker build . -t flem-file-upload:dev`

4 - Inicie o container

`docker run -d -p XXXX:3000 --name flem-mail-api:dev`

Altere o "XXXX" para uma porta externa de sua escolha. Por padrão, a porta interna é 3000.
Para alterar a porta interna, altere a linha `ENV PORT` do [Dockerfile](https://github.com/frtechdev/flem-mail-api/blob/main/Dockerfile).

<a name="section-vars">

### Variáveis de Ambiente

</a>

Para usar a aplicação, crie um arquivo .env com as seguintes variáveis de ambiente:

| Variável     | Uso  |
| ------------|-------|
|`DATABASE_URL` | Define o endereço do Servidor de BD e credenciais para acesso, de acordo com as especificações da biblioteca [Prisma.io](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-sqlserver)| |
|`NEXT_PUBLIC_API_FILE_UPLOAD` | Define o endereço da API de Arquivos  | |
|`NEXT_PUBLIC_MAILSERVICE_TYPE` | Define o tipo de Serviço de Conexão do Provedor de Email | |
|`NEXT_PUBLIC_MAILSERVICE_HOST` | Define o endereço do Provedor de Email | |
|`NEXT_PUBLIC_MAILSERVICE_PORT` | Define a porta do endereço do Provedor de Email | |
|`NEXT_PUBLIC_MAILSERVICE_USER` | Define o usuário de conexão ao endereço do Provedor de Email  | |
|`NEXT_PUBLIC_MAILSERVICE_PASS` | Define a senha de conexão ao endereço do Provedor de Email  | |

<br>

<hr>

<a name="section-changelog">

## Notas de versão

</a>

<br>

### v1.0.1-221111

- Atualização da Documentação

<br>

### v1.0.0-221108

- Commit Inicial
- Criação do dockerignore
- Criação do eslint para definir regras de linting do projeto
- Criação do gitignore
- Criação do markdownlint para definir regras de linting de markdown
- Adição do Dockerfile
- Adição da Documentação

<br>
<hr>

<a name="section-autores">

## Autores

</a>

<a href="https://github.com/frtechdev/flem-mail-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frtechdev/flem-mail-api" />
</a>

<br>
<hr>

<a name="section-contato">

## Contato

</a>

Se você gostou desse projeto, nos dê uma <a href="https://github.com/frtechdev/flem-mail-api" data-icon="octicon-star" aria-label="Star frtechdev/flem-mail-api on GitHub">estrela</a>. Isso agirá como um indicador da qualidade dos nossos serviços. <br>
Para contato, envie um email a: <a href="mailto:devops@frtechnologies.com.br">devops@frtechnologies.com.br</a>

<br>
<hr>

<a name="section-licenca">

## Licença

</a>

Licenciado sob a [MIT License](https://github.com/frtechdev/flem-mail-api/blob/main/LICENSE).
