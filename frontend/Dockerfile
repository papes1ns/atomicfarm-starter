FROM node:16.13-alpine as base
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install --frozen-lockfile
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app

FROM node:16.13-alpine as build
WORKDIR /app
COPY --from=base /app /app
RUN NODE_ENV=production yarn build

FROM nginx:1.21.6-alpine as production
WORKDIR /usr/share/nginx
ADD ./entrypoint.sh /usr/share/nginx/entrypoint.sh
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["./entrypoint.sh"]
CMD nginx-debug -g "daemon off;"