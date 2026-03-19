FROM node:25
WORKDIR /password-generator
COPY . .
RUN npm install
ENTRYPOINT npm start