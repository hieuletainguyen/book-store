FROM node:14
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=3000
EXPOSE 3000
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
VOLUME [ "/frontend-app" ]
CMD ["npm", "start"]