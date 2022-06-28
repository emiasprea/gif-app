FROM node:18-alpine3.15

WORKDIR /app
COPY . . 
RUN npm install
CMD ["node","/app/src/index.js"]