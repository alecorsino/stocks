FROM node:8.9.3-alpine
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
WORKDIR /home/node/backend
COPY package*.json /home/node/backend/
RUN npm install --global gulp-cli
RUN npm install
EXPOSE 4000
USER node