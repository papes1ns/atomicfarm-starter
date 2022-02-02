FROM node:17.1-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

CMD yarn dev