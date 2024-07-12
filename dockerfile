FROM node:20.15.1

COPY ./ /app

WORKDIR /app

RUN npm install

EXPOSE 3030

CMD npm start