FROM node:latest
WORKDIR /app
COPY . .
COPY ./package*.json ./
COPY ./note/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/
WORKDIR /app/note
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "dev" ]