# Fetching the minified node image on apline linux
FROM node:14

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /backend-app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install


# Exposing server port
EXPOSE 9897


VOLUME [ "/backend-app" ]

# Starting our application
CMD [ "npm", "start" ]

