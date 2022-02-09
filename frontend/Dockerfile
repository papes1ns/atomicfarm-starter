FROM node:16.13-alpine as build
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install --frozen-lockfile
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
ENTRYPOINT ["./entrypoint.sh"]
RUN NODE_ENV=production yarn build

FROM nginx:1.21.6-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD nginx-debug -g "daemon off;"