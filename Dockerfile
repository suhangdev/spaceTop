FROM node:latest as node

RUN npm config set registry https://registry.npm.taobao.org

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

WORKDIR /usr/local/app/admin

COPY ./admin/ ./

RUN npm run build

WORKDIR /usr/local/app/next

COPY ./next/ ./

RUN npm run build

EXPOSE 3000

RUN npm install --global pm2

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
