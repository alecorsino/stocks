# DOCKER CONFIG FOR DEVELOPMENT ONLY

# Lean Distro
FROM node:8.9.3-alpine

# Full Distro
# FROM node:8.9.3

ENV PATH="/home/node/.npm-global/bin:${PATH}"
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV DEBUG=backend:*
ENV PM2_HOME=/home/node/.pm2-dev

WORKDIR /home/node/backend
COPY package*.json /home/node/backend/

# RUN yarn global add gulp-cli
RUN npm install -g pm2 

# Wrokaround: gulp-nodemon fails to install using this distro. We need to post install it to force it.
# RUN yarn install && yarn add gulp-nodemon 
RUN npm install

EXPOSE 7000

USER node

CMD [ "pm2-dev", "start", "pm2.json" ]
