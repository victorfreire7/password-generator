# Password Generator

Gerador de senhas desenvolvido com JavaScript, HTML e CSS, utilizando Webpack para bundlar os módulos.

## Tecnologias

- JavaScript
- HTML
- CSS
- Webpack
- Babel
- Express
- Docker

## Como rodar

Clone o repositório:

```bash
git clone https://github.com/victorfreire7/password-generator.git
cd password-generator
```

Instale as dependências:

```bash
npm i
```

Para rodar em modo de desenvolvimento (atualiza automaticamente o `bundle.js` ao salvar):

```bash
npm run dev
```

Para rodar o servidor:

```bash
npm start
```

## Docker

Para rodar com Docker, execute:

```bash
docker build -t password-generator .
docker run -p 3000:3000 password-generator
```