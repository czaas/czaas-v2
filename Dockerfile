FROM node:4-onbuild

ADD package.json package.json

ADD . .

EXPOSE 3000