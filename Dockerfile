FROM risingstack/alpine:3.3-v4.2.6-1.1.3

ADD package.json package.json

RUN npm install

ADD . .

EXPOSE 3000

CMD ["node", "dist/server.js"]