FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm i -g pnpm

RUN pnpm install

COPY . /app

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]