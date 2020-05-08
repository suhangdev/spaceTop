FROM node:latest

RUN mkdir -p /usr/local/app/node

WORKDIR /usr/local/app/node

COPY ./node/package*.json ./

RUN npm install --production --registry=https://registry.npm.taobao.org

COPY ./node/ ./

EXPOSE  7001

RUN npm start

FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /usr/local/app/next

WORKDIR /usr/local/app/next

COPY ./next/package*.json ./

RUN npm install --registry=https://registry.npm.taobao.org

COPY ./next/ ./

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "run", "start" ]
