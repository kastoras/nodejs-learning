FROM node

WORKDIR /app

COPY ./src_as3/package.json .

RUN npm install

COPY ./src_as3 .

#EXPOSE 80

CMD ["npm", "start"]