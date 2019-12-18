FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV API_URL=$API_URL

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
