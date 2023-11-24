# Project: Student CRUD with React and CodeIgniter

## 1. Description

This project was developed for the "Programming Challenge" step of the full-stack developer application process at Delta Global Services and Technology Co.
It's a CRUD system for managing student information.

Meeting the specified technical requirements, the system was developed:
1. Using React library for the front-end [^1], CodeIgniter 4 framework for the back-end, and MySQL database management system.
2. Implementing a RESTful architecture for communication between the front-end and back-end.
3. Implementing a user authentication system using username and password to access the system.

Due to not having a well-configured local development environment, I opted to use GitHub Codespaces as the development environment.

## 2. Structure

The project is structured as follows:
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

The `app/` directory consists of the following subdirectories:
1. `mysql-db/`, responsible for the database service.
2. `php-backend/`, responsible for the back-end service.
3. `react-frontend/`, responsible for the front-end service.

#### 2.1. Database - MySQL
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

## 3. Requirements

I advise using the same configurations used for development:
- Node.js 20.8.1
	- npm 10.1.0
- PHP 7.4
	- Composer 2.6.5
	- Modules:
		- MySQL: pdo, pdo_mysql, mysqli, mysqlnd
		- XML: xml, xmlreader, xmlwriter, simplexml, xsl
		- Image Manipulation: gd
		- Other CI4 required files: intl, json, mbstring, curl

If you plan using different versions for the above items, ensure that they are compatible.

## 4. Installation and Configuration

1. Download the repository to your local environment.
2. Configure back-end dependencies by accessing the `php-backend/` directory and running the `composer install` command.
3. Configure front-end dependencies by accessing the `react-frontend/` directory and running the `npm install` command.[^2]

## 5. Execution

Run each service layer separately, following this order:
1. Database service: access the `app/` directory and run the `docker-compose up --build` command. The service will be available on port `3306`.
2. Back-end: access the `php-backend/` directory and run the `php spark serve` command. The service will be available on port `8080`.[^3][^4]
3. Front-end: access the `react-frontend/` directory and run the `npm start` command. The service will be available on port `3000`.

## 6. Improvements

Some improvements that could be implemented:
- Better user interface;
- Improved exception handling;
- Enhanced input validation;
- Authentication session caching.

[^1]: For front-end development, besides the React library, I opted to use "Create React App", React Router, TypeScript, and the MUI (Material UI) component library.
[^2]: If opting to use GitHub Codespaces, add a `.env.local` file in the `react-frontend/` directory, adding your codespace domain to the `REACT_APP_BASE_URL` environment variable.
[^3]: Make necessary changes if using an Apache or NGINX server.
[^4]: If using GitHub Codespaces, due to platform limitations, it will be necessary to change the visibility of the back-end server.