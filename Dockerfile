FROM node:15.2-alpine3.10

WORKDIR /nodepolus/

COPY package.json package-lock.json ./
RUN npm install --ignore-scripts

COPY global.d.ts tsconfig.json ./
COPY bin/ ./bin/
COPY lib/ ./lib/
RUN npm run build

ENV NODE_ENV=production

EXPOSE 22023 22024

CMD [ "node", "dist/bin/polus.js" ]
