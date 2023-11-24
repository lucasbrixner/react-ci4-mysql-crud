# Projeto: CRUD de Alunos com React e CodeIgniter

## 1. Descrição

Este projeto foi desenvolvido para a etapa "Desafio de Programação" do processo seletivo para desenvolvedor full-stack da Delta Global Serviços e Tecnologia S/A.
Trata-se de um sistema CRUD para gerenciamento de informações de alunos.

Atendendo aos requisitos técnicos especificados, o sistema foi desenvolvido:
1. Utilizando a biblioteca React para o front-end [^1], o framework CodeIgniter 4 para back-end, e sistema de gerenciamento de banco de dados MySQL;
2. Implementando a arquitetura RESTful para comunicação entre front-end e back-end;
3. Implementando um sistema de autenticação de usuário e senha para acessar o sistema.

Por não possuir no momento um ambiente de desenvolvimento local bem configurado, optei por utilizar o GitHub Codespaces como ambiente de desenvolvimento.

## 2. Estrutura

O projeto é estruturado da seguinte forma:
```
./
├─ app/
│  ├─ mysql-db/
│  │  ├─ Dockerfile
│  │  ├─ .env
│  │  └─ ...
│  ├─ php-backend/
│  │  ├─ .env
│  │  └─ ...
│  ├─ react-frontend/
│  │  ├─ (.env.local)
│  │  └─ ...
│  └─ docker-compose.yml
├─ .gitignore
├─ README.en-US.md
└─ README.pt-BR.md
```

O diretório `app/` é composto pelos seguintes subdiretórios:
1. `mysql-db/`, responsável pelo serviço de banco de dados;
2. `php-backend/`, responsável pelo serviço de back-end;
3. `react-frontend/`, responsável pelo serviço de front-end.

#### 2.1. Banco de dados - MySQL
```
mysql-db/
├─ .env
├─ Dockerfile
├─ init.sql
└─ my.cnf
```

#### 2.2. Back-end - CodeIgniter 4
```
php-backend/
├─ public/
├─ app/
│  ├─ Config/
│  │  ├─ ...
│  │  ├─ Database.php
│  │  ├─ Filters.php
│  │  └─ Routes.php
│  ├─ Controller/
│  │  ├─ Home.php
│  │  ├─ Students.php
│  │  ├─ StudentsPortraits.php
│  │  └─ Users.php
│  ├─ Filters/
│  │  └─ Cors.php
│  ├─ Models/
│  │  ├─ StudentsModel.php
│  │  ├─ StudentsPortraitsModel.php
│  │  └─ UsersModel.php
│  └─ ...
├─ .env
├─ builds
├─ composer.json
├─ composer.lock
└─ ...
```

#### 2.3. Front-end - React
```
react-frontend/
├─ public/
├─ src/
│  ├─ api/
│  ├─ auth/
│  ├─ components/
│  ├─ routes/
│  │  ├─ pages/
│  │  │  ├─ Home.tsx
│  │  │  ├─ SignIn.tsx
│  │  │  ├─ SignUp.tsx
│  │  │  └─ Start.tsx
│  │  └─ Root.tsx
│  ├─ theme/
│  ├─ App.tsx
│  └─ index.tsx
├─ .env.local
├─ builds
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ ...
```

## 3. Requisitos

Recomendo utilizar as mesmas configurações utilizadas para o desenvolvimento:
-  Node.js 20.8.1
	- npm 10.1.0
- PHP 7.4
	- Composer 2.6.5
	- Módulos:
		- MySQL: pdo, pdo_mysql, mysqli, mysqlnd
		- XML: xml, xmlreader, xmlwriter, simplexml, xsl
		- Manipulação de imagens: gd
		- Outros arquivos requeridos pelo CI4: intl, json, mbstring, curl

Caso utilize versões diferentes, confira se há compatibilidade com as versões aqui listadas.

## 4. Instalação e Configuração

1. Faça o download do repositório para seu ambiente local.
2. Configure as dependências do back-end acessando o diretório `php-backend/` e executando o comando `composer install`.
3. Configure as dependências do front-end acessando o diretório `react-frontend/` e executando o comando `npm install`.[^2]

## 5. Execução

Execute cada camada de serviços em separado, conforme a seguinte ordem:
1. Serviço de banco de dados: acesse o diretório `app/` e  execute o comando `docker-compose up --build`. O serviço estará disponível no porto `3306`.
2. Back-end: acesse o diretório `php-backend/` e execute o comando `php spark serve`. O serviço estará disponível no porto `8080`.[^3][^4]
3. Front-end: acesse o diretório `react-frontend/` e execute o comando `npm start`. O serviço estará disponível no porto `3000`.

## 6. Melhorias

Algumas melhorias que poderiam ser implementadas:
- Melhor interface de usuário;
- Melhor tratamento de exceções;
- Melhor validação de inputs;
- Cache de sessão de autenticação.


[^1]: Para o desenvolvimento do front-end, além da biblioteca React, optei por utilizar "Create React App", React Router, TypeScript, e a biblioteca de componentes MUI (Material UI).
[^2]: Caso opte por utilizar o GitHub Codespaces, adicione um arquivo `.env.local` no diretório `react-frontend/`, adicionando ao arquivo o domínio do seu codespace à variável de ambiente `REACT_APP_BASE_URL`.
[^3]: Faça as alterações necessárias caso queira utilizar um servidor Apache ou NGINX.
[^4]: Caso utilize o GitHub Codespaces, devido a limitações da plataforma, será necessário mudar a visibilidade do servidor back-end.