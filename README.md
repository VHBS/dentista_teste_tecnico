# Softeo - Dentista Érica

Aplicação: https://softeo-erica.vercel.app/

Um projeto full stack realizado para um teste técnico.

Este projeto tem o intuito de substituir o caderno de anotações da Dr. Érica por uma aplicação em nuvem para organizar os pagamentos a receber.

## Tecnologias Utilizadas
- Front end:
	- [React](https://pt-br.reactjs.org/)
	- [TypeScript](https://www.typescriptlang.org/)
	- [Styled Components](https://styled-components.com/)
	- [Vercel](https://vercel.com/)

- Back end:
	- [NodeJS](https://nodejs.org/) com [Express](https://expressjs.com/)
	- [TypeScript](https://www.typescriptlang.org/)
	- [Jest](https://jestjs.io/)
	- [Heroku](http://heroku.com/)

- Banco de Dados:
	- [PostgreSQL](https://www.postgresql.org/)
	- [MySQL](https://www.mysql.com/)
	- [Sequelize](https://sequelize.org/)
	- [Supabase](https://supabase.com/)

- Infra estrutura:
	- [Docker](https://www.docker.com/)

- Padrão de projeto:
	- [ESlint](https://eslint.org/)
	- [Prettier](https://prettier.io/)
	

## 💻  Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:

-  De preferência esteja utilziando um sistema Linux.
- Possui `node` e `docker/docker compose` instalados.


## 🚀 Instalando o Projeto
Para instalar o projeto siga os seguintes passos:
- Verifique se as portas `3000`, `3001` e `3306` não estão sendo utilizadas.
```
sudo lsof -i tcp:"número-da-porta"
```
Caso não tenha resposta, é porque você não possui nenhuma aplicação rodando nesta porta.

- Clone este repositório:
	- SSH ou HTTPS:
```
git@github.com:VHBS/dentista_teste_tecnico.git
```	
```
https://github.com/VHBS/dentista_teste_tecnico.git
```
- Vá para o diretório clonado:
```
cd softeo-dentista-erica
```
- Utilize o comando:

``` 
docker compose up -d
```

## ☕ Utilizando o Projeto
Para utilizar este projeto localmente, siga os seguintes passos:
-   Abra o seu navegador com a seguinte url:
```
http://localhost:3000
```
- Aproveite a aplicação.


## 🧪 Testando o Projeto
Para testar o projeto, siga os seguintes passos:
### Backend:
- Vá para o diretório backend:
```
cd backend
```
- Utilize o comando
```
npm test
```
