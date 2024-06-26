FROM node:14
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=8000
EXPOSE 8000
ENV REACT_APP_BACKEND_URL=http://backend:9897
VOLUME [ "/frontend-app" ]
CMD ["npm", "start"]