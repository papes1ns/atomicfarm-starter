FROM node:17-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

CMD yarn dev