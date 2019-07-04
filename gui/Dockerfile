# base image
FROM node:12.2.0-alpine as build

# working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# set path and copy package.json
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . /usr/src/app
RUN npm run build

# nginx
FROM nginx:1.13.12-alpine

# get static build
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# nginx default port expose in docker network
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]