FROM node:14-alpine
# set working directory
WORKDIR /app

# add app
COPY . ./
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

EXPOSE 3000

ENV PORT=3000

ENV REACT_APP_BACKEND_URL=http://bookstore-backend:9897

VOLUME [ "/frontend-app" ]


# start app
CMD ["npm", "start"]