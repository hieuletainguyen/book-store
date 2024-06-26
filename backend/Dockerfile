FROM node:14
WORKDIR /backend-app
COPY . .
RUN npm install
ENV PORT=9897
EXPOSE 9897
VOLUME [ "/backend-app" ]
CMD ["node", "app.js"]
