FROM node:latest

MAINTAINER Felix Klauke <info@felix-klauke.de>

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]