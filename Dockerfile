FROM node:latest as node

RUN mkdir -p /usr/local/app/node

RUN mkdir -p /usr/local/app/next

WORKDIR /usr/local/app/node

COPY ./node/package*.json ./

RUN npm install --production

COPY ./node/ ./

EXPOSE 7001

RUN npm start

WORKDIR /usr/local/app/next

COPY ./next/package*.json ./

RUN npm install

COPY ./next/ ./

WORKDIR /usr/local/app/admin

COPY ./admin/package*.json ./

RUN npm install

COPY ./admin/ ./

RUN npm run build

FROM keymetrics/pm2:latest-alpine as pm2

COPY --from=node /usr/local/app/ /usr/local/app/

WORKDIR /usr/local/app/next

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "run", "start" ]
