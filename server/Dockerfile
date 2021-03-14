FROM node:14.16.0-alpine3.10
WORKDIR /app
COPY package.json /app
RUN npm install --silent --production
COPY . /app
EXPOSE 5000
CMD [ "node","server.js" ]