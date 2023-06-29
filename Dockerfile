FROM node:18.13.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

ENV NODE_ENV production

RUN npm run build

CMD ["npm", "run", "start"]