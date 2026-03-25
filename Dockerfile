FROM node:25
WORKDIR /password-generator
ARG PORT=3003
EXPOSE $PORT
ENV PORT=$PORT
COPY . .
RUN npm install
ENTRYPOINT npm start