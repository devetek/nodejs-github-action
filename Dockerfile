FROM node:14.18.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 8080

CMD [ "node", "index.js" ]