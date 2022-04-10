FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV=development

RUN yarn global add lerna

#COPY ./package.json .
#COPY ./lerna.json .
#COPY ./yarn.lock .
#COPY ./tsconfig.json .
#COPY ./configure-references.js .
#COPY packages/server/package.json ./app/packages/server/package.json
#COPY packages/web/package.json ./app/packages/web/package.json
COPY . .

RUN yarn

RUN yarn bootstrap

CMD [ "yarn", "run:dev"]