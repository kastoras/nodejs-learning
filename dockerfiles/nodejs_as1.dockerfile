FROM node

WORKDIR /app

COPY ./src/package.json .

RUN npm install

COPY ./src_as1 .

CMD ["npm", "start"]