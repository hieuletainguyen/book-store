# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /backend-app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

RUN npm install -g npm@latest
RUN npm cache clean --force

# Exposing server port
EXPOSE 9897

ENV PORT=9897

VOLUME [ "/backend-app" ]

# Starting our application
CMD [ "npm", "start" ]

