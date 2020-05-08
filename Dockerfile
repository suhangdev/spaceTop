FROM node:latest

RUN mkdir -p /usr/local/app/node

WORKDIR /usr/local/app/node

COPY ./node/package*.json ./

RUN npm install --production

COPY ./node/ ./

RUN npm start

