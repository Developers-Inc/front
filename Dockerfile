FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
RUN yarn install

ENTRYPOINT ["yarn", "start"]