FROM node:4-onbuild

ADD package.json package.json

RUN npm install 

ADD . .

EXPOSE 3000