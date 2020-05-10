FROM node:latest as node

RUN mkdir -p /usr/local/app/node

RUN mkdir -p /usr/local/app/next

RUN mkdir -p /usr/local/app/admin

COPY ./node/package*.json /usr/local/app/node/

COPY ./next/package*.json /usr/local/app/next/

COPY ./admin/package*.json /usr/local/app/admin/

RUN cd /usr/local/app/node && npm install --production

RUN cd /usr/local/app/next && npm install

RUN cd /usr/local/app/admin && npm install

WORKDIR /usr/local/app/node

COPY ./node/ ./

EXPOSE 7001

RUN npm start

WORKDIR /usr/local/app/next

COPY ./next/ ./

RUN npm run build

WORKDIR /usr/local/app/admin

COPY ./admin/ ./

RUN npm run build

FROM keymetrics/pm2:latest-alpine as pm2

COPY --from=node /usr/local/app/ /usr/local/app/

WORKDIR /usr/local/app/next

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--run", "start" ]
